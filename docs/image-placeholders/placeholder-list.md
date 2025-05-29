# WonderBear Landing Page Image Plan

This document outlines all image requirements for the WonderBear Alice in Wonderland themed teddy bear landing page. These image specifications will be used with the Lucca Unsplash tools to retrieve all necessary images in a single operation.

## Image Categories and Requirements

Our landing page will require images across several categories to create a cohesive Alice in Wonderland theme while effectively showcasing our fictional WonderBear product.

### Directory Structure

For our image organization, we'll use the following structure:

```
assets/
└── images/
    ├── hero/
    ├── product/
    ├── backgrounds/
    ├── features/
    ├── testimonials/
    ├── story/
    └── details/
```

## Image Requirements by Category

Below is a structured plan of all images needed for the website:

### 1. Hero Section Images

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `teddy` | 1 | landscape | regular, large | Main hero image of a premium teddy bear that can represent WonderBear |
| `wonderland` | 1 | landscape | regular, large | Whimsical background that evokes Alice in Wonderland theme |

Search terms: "premium teddy bear", "luxury plush toy", "fantasy garden", "whimsical tea party"

### 2. Product Showcase Images

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `teddy` | 3 | square | regular, small | Different angles of plush bears to represent WonderBear |
| `toy details` | 2 | square | regular, small | Close-up details of premium plush toys showing craftsmanship |
| `child toy` | 1 | landscape | regular, small | Child holding teddy bear for size reference |

Search terms: "collectible teddy bear", "handcrafted plush toy", "teddy bear details", "child hugging teddy bear"

### 3. Story Section Images

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `books` | 1 | landscape | regular, small | Vintage or classic books representing literary heritage |
| `wonderland` | 2 | landscape | regular, small | Alice in Wonderland themed elements (tea party, playing cards, etc.) |
| `craftsmanship` | 1 | square | regular, small | Hands crafting/sewing, representing quality creation |

Search terms: "vintage storybook", "alice in wonderland", "tea party setting", "handcrafting toys", "playing cards and pocket watch"

### 4. Features Section Images

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `teddy details` | 4 | square | regular, small | Close-ups of teddy bear features (stitching, fabrics, accessories) |
| `wonderland elements` | 4 | square | regular, small | Iconic Wonderland items (top hats, pocket watches, teacups, keys) |

Search terms: "teddy bear stitching", "vintage pocket watch", "ornate top hat", "fabric texture", "antique key", "fine craftsmanship"

### 5. Background Textures

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `patterns` | 3 | landscape | regular, small | Subtle patterns that can be used as section backgrounds |
| `textures` | 3 | landscape | regular, small | Fabric or paper textures for background elements |

Search terms: "vintage fabric pattern", "playing card pattern", "parchment texture", "subtle victorian pattern"

### 6. Testimonial Section Images

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `people` | 3 | portrait | small, thumb | Professional-looking individuals for testimonial avatars |
| `families` | 2 | portrait | small, thumb | Families with children for parent testimonials |

Search terms: "professional headshot", "family portrait", "smiling child with toy"

### 7. Purchase Section Images

| Category | Count | Orientation | Sizes | Description |
|----------|-------|-------------|-------|-------------|
| `gift` | 1 | landscape | regular, small | Premium gift packaging/unwrapping experience |
| `collection` | 1 | landscape | regular, small | Collection of premium toys or collectibles on display |

Search terms: "luxury gift packaging", "collector display shelf", "premium product collection"

## Image Request Structure for Lucca Unsplash Tool

Based on the requirements above, here's the JSON structure to be used with the `getLuccaUnsplashImages` tool:

```json
{
  "requirements": [
    {
      "category": "teddy",
      "count": 4,
      "orientation": "square",
      "sizes": ["regular", "large", "small"],
      "description": "Premium teddy bears for hero and product sections"
    },
    {
      "category": "wonderland",
      "count": 3,
      "orientation": "landscape",
      "sizes": ["regular", "large", "small"],
      "description": "Alice in Wonderland themed scenes and elements"
    },
    {
      "category": "toy details",
      "count": 2,
      "orientation": "square",
      "sizes": ["regular", "small"],
      "description": "Close-up details of premium toys showing craftsmanship"
    },
    {
      "category": "child toy",
      "count": 1,
      "orientation": "landscape",
      "sizes": ["regular", "small"],
      "description": "Child holding/hugging teddy bear for size reference"
    },
    {
      "category": "books",
      "count": 1,
      "orientation": "landscape",
      "sizes": ["regular", "small"],
      "description": "Vintage or classic books representing literary heritage"
    },
    {
      "category": "craftsmanship",
      "count": 1,
      "orientation": "square",
      "sizes": ["regular", "small"],
      "description": "Hands crafting/sewing, representing quality creation"
    },
    {
      "category": "teddy details",
      "count": 4,
      "orientation": "square",
      "sizes": ["regular", "small"],
      "description": "Close-ups of teddy bear features and quality details"
    },
    {
      "category": "wonderland elements",
      "count": 4,
      "orientation": "square",
      "sizes": ["regular", "small"],
      "description": "Iconic Wonderland items (top hats, pocket watches, teacups, keys)"
    },
    {
      "category": "patterns",
      "count": 3,
      "orientation": "landscape",
      "sizes": ["regular", "small"],
      "description": "Subtle patterns for section backgrounds"
    },
    {
      "category": "textures",
      "count": 3,
      "orientation": "landscape",
      "sizes": ["regular", "small"],
      "description": "Fabric or paper textures for background elements"
    },
    {
      "category": "people",
      "count": 3,
      "orientation": "portrait",
      "sizes": ["small", "thumb"],
      "description": "Professional-looking individuals for testimonial avatars"
    },
    {
      "category": "families",
      "count": 2,
      "orientation": "portrait",
      "sizes": ["small", "thumb"],
      "description": "Families with children for parent testimonials"
    },
    {
      "category": "gift",
      "count": 1,
      "orientation": "landscape",
      "sizes": ["regular", "small"],
      "description": "Premium gift packaging/unwrapping experience"
    },
    {
      "category": "collection",
      "count": 1,
      "orientation": "landscape",
      "sizes": ["regular", "small"],
      "description": "Collection of premium toys or collectibles on display"
    }
  ],
  "outputFilePath": "./assets/images/wonderbear-images.yml"
}
```

## Search Term Strategy

When searching for images using the Lucca Unsplash tools, we'll use these search terms to find images that can represent our fictional WonderBear product and the Alice in Wonderland theme:

- For teddy bears: "premium teddy bear", "collector teddy bear", "handcrafted plush toy"
- For Wonderland elements: "alice in wonderland", "tea party", "pocket watch", "playing cards", "vintage key"
- For backgrounds: "fantasy garden", "whimsical setting", "vintage pattern", "victorian texture"
- For craftsmanship: "handmade crafting", "sewing detail", "textile craftsmanship"
- For testimonials: "professional portrait", "family with toys", "child playing"

## Usage Instructions

1. Create the required directory structure:
   ```
   assets/
   └── images/
   ```

2. Use the `getLuccaUnsplashImages` tool with the above JSON structure to retrieve all images at once

3. The tool will generate a YAML file at `./assets/images/wonderbear-images.yml` containing all image URLs and attribution information

4. When implementing the website, use the `getLuccaImagesData` tool to access these images and include the proper attribution as comments above each image tag

5. Remember: ALWAYS include the attribution information from the YAML file for every image used