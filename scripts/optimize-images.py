#!/usr/bin/env python3
"""
Image Optimization Utility for Inkwazi Field Guide POE
Converts PNG and JPEG images to high-efficiency WebP files.
"""

import os
import sys

def optimize_images(directory="."):
    if os.path.exists("/tmp/site-packages") and "/tmp/site-packages" not in sys.path:
        sys.path.insert(0, "/tmp/site-packages")
    try:
        from PIL import Image
    except ImportError:
        print("Pillow library is required. Install via: pip install pillow")
        sys.exit(1)

    print("🔍 Scanning directory for unoptimized PNG/JPEG images...")
    supported_extensions = ('.png', '.jpg', '.jpeg')
    files_to_process = [f for f in os.listdir(directory) if f.lower().endswith(supported_extensions)]

    if not files_to_process:
        print("No images found to process.")
        return

    total_orig_bytes = 0
    total_webp_bytes = 0
    converted_count = 0

    for filename in sorted(files_to_process):
        orig_path = os.path.join(directory, filename)
        base_name = os.path.splitext(filename)[0]
        webp_path = os.path.join(directory, f"{base_name}.webp")

        orig_size = os.path.getsize(orig_path)
        total_orig_bytes += orig_size

        try:
            with Image.open(orig_path) as img:
                # Save as WebP with 82% quality (excellent visually, massive compression)
                img.save(webp_path, 'WEBP', quality=82, method=6)
            
            webp_size = os.path.getsize(webp_path)
            total_webp_bytes += webp_size
            converted_count += 1
            savings = (1 - webp_size / orig_size) * 100
            print(f"  ✅ {filename:35s} | {orig_size/1024:6.1f} KB ➔ {webp_size/1024:6.1f} KB ({savings:4.1f}% saved)")

        except Exception as e:
            print(f"  ❌ Failed to convert {filename}: {e}")

    print("\n" + "="*70)
    print(f"Successfully processed {converted_count} images.")
    print(f"Original Total: {total_orig_bytes / (1024*1024):.2f} MB")
    print(f"Optimized WebP: {total_webp_bytes / (1024*1024):.2f} MB")
    if total_orig_bytes > 0:
        overall_savings = (1 - total_webp_bytes / total_orig_bytes) * 100
        print(f"🎉 Total Mobile Bandwidth Saved: {overall_savings:.1f}%!")
    print("="*70)

if __name__ == "__main__":
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    optimize_images(target_dir)
