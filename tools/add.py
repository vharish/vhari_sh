#!/usr/bin/env python3
# /// script
# dependencies = [
#   "requests",
#   "beautifulsoup4",
# ]
# ///
import sys
import re
import requests
from bs4 import BeautifulSoup
import argparse
import os

def find_project_root():
    """Traverse up to find the project root containing src/lib/music.ts"""
    curr = os.path.abspath(os.getcwd())
    # Also check if the script itself is in a tools/ folder within the project
    script_dir = os.path.dirname(os.path.abspath(__file__))
    potential_roots = [curr, os.path.dirname(script_dir)]
    
    for root in potential_roots:
        if os.path.exists(os.path.join(root, 'src/lib/music.ts')):
            return root
            
    # Keep going up from current dir as fallback
    while curr != os.path.dirname(curr):
        if os.path.exists(os.path.join(curr, 'src/lib/music.ts')):
            return curr
        curr = os.path.dirname(curr)
    return None

def scrape_bandcamp(url):
    print(f"Scraping {url}...")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    
    # Extract Album ID using regex from the page source
    id_patterns = [
        r'album_id":(\d+)',
        r'tralbum_id":(\d+)',
        r'album_id&quot;:(\d+)',
        r'tralbum_id&quot;:(\d+)',
        r'data-item-id="(\d+)"',
        r'data-item-id&quot;:&quot;(\d+)&quot;'
    ]
    
    album_id = None
    for pattern in id_patterns:
        match = re.search(pattern, response.text)
        if match:
            album_id = match.group(1)
            break
    
    # Extract Tags
    soup = BeautifulSoup(response.text, 'html.parser')
    tags = []
    for a in soup.find_all('a', class_='tag'):
        tag = a.get_text().strip().lower()
        if tag and tag not in tags:
            tags.append(tag)
    
    if not tags:
        tags = re.findall(r'/tag/([^/"]+)', response.text)
        tags = list(set([t.lower() for t in tags if t and not t.startswith('?')]))

    return album_id, tags

def add_music(url):
    album_id, tags = scrape_bandcamp(url)
    if not album_id:
        print(f"Error: Could not find album ID for {url}")
        sys.exit(1)
    
    print(f"Found Album ID: {album_id}")
    print(f"Found Tags: {tags}")
    
    root = find_project_root()
    if not root:
        print("Error: Could not find project root (missing src/lib/music.ts)")
        sys.exit(1)
        
    file_path = os.path.join(root, 'src/lib/music.ts')

    with open(file_path, 'r') as f:
        content = f.read()
    
    if f"id: '{album_id}'" in content or f'id: "{album_id}"' in content:
        print(f"Album with ID {album_id} already exists in library.")
        return

    new_item = f"""	{{
		id: '{album_id}',
		provider: 'bandcamp',
		url: '{url}',
		tags: {tags},
	}},"""
    
    pattern = r'(export const musicLibrary: MusicItem\[\] = \[)'
    if re.search(pattern, content):
        updated_content = re.sub(pattern, f"\\1\n{new_item}", content)
        with open(file_path, 'w') as f:
            f.write(updated_content)
        print(f"Successfully added to {file_path} at the top!")
    else:
        print(f"Error: Could not find musicLibrary array in {file_path}")
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Add items to the project library.")
    parser.add_argument("--music", help="Add a Bandcamp album URL to the music library")
    
    args = parser.parse_args()
    
    if args.music:
        add_music(args.music)
    else:
        parser.print_help()
