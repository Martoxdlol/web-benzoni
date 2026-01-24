# Project Technical Specifications

## Design File Information

### Source File
- **Filename:** web benzoni.ai
- **Application:** Adobe Illustrator
- **Format:** .ai (Adobe Illustrator)

### Canvas Specifications
- **Artboard Dimensions:** 1280 x 813 pixels
- **Color Mode:** RGB color
- **Color Profile:** sRGB IEC61966-2.1
- **Ruler Units:** Pixels

### Design Settings
- **Show Images in Outline Mode:** OFF
- **Highlight Substituted Fonts:** OFF
- **Highlight Substituted Glyphs:** OFF
- **Preserve Text Editability:** ON
- **Simulate Colored Paper:** OFF

## Typography

### Fonts Used

#### Primary Fonts (Included)
1. **Raleway Family**
   - Raleway Regular (TrueType)
   - Raleway Medium (TrueType)
   - Raleway SemiBold (TrueType)
   - Usage: Body text, headings, UI elements

2. **Arial**
   - Arial (OpenType)
   - Usage: Fallback and supporting text

#### Protected Fonts (Not Included)
- **Brandon Grotesque Regular** (Adobe Fonts)
  - Protected font that could not be packaged
  - May need to be re-licensed or substituted

### Font File Details
- **Raleway-Regular.ttf:** 126 KB
- **Raleway-Medium.ttf:** 127 KB
- **Raleway-SemiBold.ttf:** 128 KB
- **Arial.ttf:** 755 KB

## Image Assets

### Image Specifications
All linked images share these common properties:
- **Type:** RGB
- **Bits per Pixel:** 24
- **Channels:** 3 (Red, Green, Blue)

### Image Categories

#### Facial Treatments (5 images)
| Filename | Dimensions | File Size |
|----------|------------|-----------|
| FACIAL2.jpg | 3831 x 2554 px | 2.4 MB |
| FACIAL3.jpg | 3831 x 2554 px | 1.8 MB |
| FACIAL5.jpg | 600 x 300 px | 48 KB |
| FACIAL6.jpg | 3826 x 2542 px | 3.0 MB |
| FACIAÑ.jpg | 3831 x 2554 px | 2.2 MB |

#### Body & Massage Treatments (17 images)
| Filename | Dimensions | File Size | Treatment Type |
|----------|------------|-----------|----------------|
| masaje_reductivo_2.jpg | 750 x 496 px | 89 KB | Reducing Massage |
| masaje_descontracturante.jpg | 1920 x 1080 px | 180 KB | Decontracting |
| masajes piedras2.jpg | 2048 x 2048 px | 369 KB | Hot Stones |
| masajes-terapeuticos-ayurvedicos...jpeg | 843 x 563 px | 94 KB | Ayurvedic |
| californiano.jpg | 1378 x 2067 px | 1.2 MB | Californian |
| reflexologia-podal.jpg | 1000 x 600 px | 49 KB | Reflexology |
| aam-Masaje-express-en-silla-02.jpg | 1600 x 1067 px | 133 KB | Chair Massage |
| spa-masaje-relax...jpg | 2560 x 1707 px | 332 KB | Spa/Relax |
| depilacion laser.jpg | 1000 x 668 px | 75 KB | Laser Depilation |
| lipolaser.jpg | 1200 x 800 px | 120 KB | Lipolaser |
| presoterapia.jpg | 1901 x 910 px | 101 KB | Pressotherapy |
| electroterapia-espalda.jpg | 720 x 440 px | 25 KB | Electrotherapy |
| termoterapia.jpg | 768 x 301 px | 24 KB | Thermotherapy |
| ondas electromagneticas.jpg | 1000 x 482 px | 68 KB | Electromagnetic |
| radiofrecuencia.jpg | 1000 x 668 px | 339 KB | Radiofrequency |
| spider.jpg | 1000 x 667 px | 161 KB | Spider Veins |
| sudoracion axilar 5.jpg | 1400 x 934 px | 69 KB | Axillary |

#### General Purpose (8 images)
| Filename | Dimensions | File Size | Purpose |
|----------|------------|-----------|---------|
| recepcion.jpg | 1280 x 960 px | 264 KB | Reception Area |
| mujer-madura2.jpg | 500 x 333 px | 170 KB | Target Audience |
| Flyer-Mama (1).jpg | 1500 x 1000 px | 120 KB | Marketing Material |
| cosmetica.jpg | 1000 x 470 px | 506 KB | Cosmetics |
| asesoramiento-medico...jpg | 1024 x 771 px | 27 KB | Medical Consulting |
| IMG_20260113_155022.jpg | 1200 x 776 px | 380 KB | Facility Photo |
| IMG_20260113_155056.jpg | 1085 x 1097 px | 610 KB | Facility Photo |
| Screenshot_2026-01-13...jpg | 1096 x 1622 px | 624 KB | Reference/Mobile |

## Color Profile

### Color Space
- **Profile:** sRGB IEC61966-2.1
- **Mode:** RGB (optimized for screen display)
- **Spot Colors:** None used

### Recommendations for Web
- Maintain sRGB color space for web consistency
- Consider adding color palette documentation if brand colors are defined
- Ensure contrast ratios meet WCAG accessibility standards

## Resolution Guidelines

### Original Design Resolution
Most images range from 52 to 403 PPI (pixels per inch)

### Web Optimization Recommendations
1. **Hero Images:** Max 1920px width
2. **Treatment Cards:** 600-800px width
3. **Thumbnails:** 300-400px width
4. **Mobile Optimization:** Responsive images with srcset
5. **Compression:** Use modern formats (WebP, AVIF) with JPEG fallback
6. **Target File Sizes:**
   - Hero images: < 200 KB
   - Standard images: < 100 KB
   - Thumbnails: < 50 KB

## File Structure in Original Design

The original .ai file contains linked images from multiple source locations:
- `/Volumes/BACK UP/WEB BENZONI/fotos/`
- `/Volumes/BACK UP/web benzoni_Folder/Links/`
- `/Usuarios/ricardoazul/Descargas/`
- `/Usuarios/ricardoazul/Trabajos/FABIANA/WEB BENZONI/fotos/`

All images have been consolidated into this package for easy access.

## Browser Support Recommendations

### Fonts
- Provide WOFF2 format (modern browsers)
- Provide WOFF format (fallback)
- Provide TTF format (older browser fallback)
- Define font-display: swap for performance

### Images
- Primary: WebP format
- Fallback: JPEG for photos, PNG for graphics
- Consider lazy loading for below-fold images
- Implement responsive images with srcset and sizes attributes

## Performance Targets

### Recommended Metrics
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Page Weight:** < 2 MB
- **Total Image Weight:** < 1.5 MB

### Optimization Strategies
1. Compress and resize all images
2. Convert fonts to web formats
3. Implement lazy loading
4. Use CDN for asset delivery
5. Enable browser caching
6. Minify CSS and JavaScript

## Accessibility Considerations

### Required Implementation
- Alt text for all images
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators on interactive elements

### Medical Website Specific
- Clear privacy policy
- GDPR compliance mechanisms
- Secure contact forms
- Professional credentials display
- Treatment disclaimers where appropriate

## SEO Recommendations

### Technical SEO
- Semantic HTML structure
- Meta descriptions for all pages
- Open Graph tags for social sharing
- Schema.org markup for local business
- XML sitemap
- Robots.txt

### Content SEO
- Optimized page titles
- H1 tags on all pages
- Internal linking structure
- Image alt text optimization
- Mobile-friendly design
- Fast page load times

## Responsive Design Breakpoints

Based on the 1280px artboard, recommended breakpoints:

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1024px
- **Desktop:** 1025px - 1440px
- **Large Desktop:** 1441px+

## Version Control

- **Original Design Date:** January 2026
- **Package Creation Date:** January 24, 2026
- **Package Version:** 1.0

---

*Last Updated: January 24, 2026*
