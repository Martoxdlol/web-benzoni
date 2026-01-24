# Asset Inventory & Usage Guide

## Complete Asset List

### Images

#### Facial Treatment Images
**Location:** `assets/images/facial/`

| # | Filename | Size | Dimensions | Recommended Use |
|---|----------|------|------------|-----------------|
| 1 | FACIAL2.jpg | 2.4 MB | 3831 x 2554 px | Hero image, gallery |
| 2 | FACIAL3.jpg | 1.8 MB | 3831 x 2554 px | Hero image, gallery |
| 3 | FACIAL5.jpg | 48 KB | 600 x 300 px | Card thumbnail, preview |
| 4 | FACIAL6.jpg | 3.0 MB | 3826 x 2542 px | Hero image, gallery |
| 5 | FACIAÑ.jpg | 2.2 MB | 3831 x 2554 px | Hero image, gallery |

**Total:** 5 images | **Total Size:** ~9.5 MB

**Treatments Covered:**
- Deep facial cleansing
- Bioestimulation treatments
- Injectable treatments
- Botox and fillers
- Skin rejuvenation procedures

---

#### Body & Massage Treatment Images
**Location:** `assets/images/treatments/`

| # | Filename | Size | Dimensions | Treatment |
|---|----------|------|------------|-----------|
| 1 | masaje_reductivo_2.jpg | 89 KB | 750 x 496 px | Reducing massage |
| 2 | masaje_descontracturante.jpg | 180 KB | 1920 x 1080 px | Decontracting massage |
| 3 | masajes piedras2.jpg | 369 KB | 2048 x 2048 px | Hot stone massage |
| 4 | masajes-terapeuticos-ayurvedicos-madrid-centro-ayurveda-para-ti-abhyanga-dolor.jpeg | 94 KB | 843 x 563 px | Ayurvedic massage |
| 5 | californiano.jpg | 1.2 MB | 1378 x 2067 px | Californian massage |
| 6 | reflexologia-podal.jpg | 49 KB | 1000 x 600 px | Reflexology |
| 7 | aam-Masaje-express-en-silla-02.jpg | 133 KB | 1600 x 1067 px | Chair massage |
| 8 | spa-masaje-relax-centro-san-sebastian-de-los-reyes-body-massage-by-jose-sanz.jpg | 332 KB | 2560 x 1707 px | Spa/relaxation |
| 9 | depilacion laser.jpg | 75 KB | 1000 x 668 px | Laser hair removal |
| 10 | lipolaser.jpg | 120 KB | 1200 x 800 px | Lipolaser treatment |
| 11 | presoterapia.jpg | 101 KB | 1901 x 910 px | Pressotherapy |
| 12 | electroterapia-espalda.jpg | 25 KB | 720 x 440 px | Electrotherapy |
| 13 | termoterapia.jpg | 24 KB | 768 x 301 px | Thermotherapy |
| 14 | ondas electromagneticas.jpg | 68 KB | 1000 x 482 px | Electromagnetic waves |
| 15 | radiofrecuencia.jpg | 339 KB | 1000 x 668 px | Radiofrequency |
| 16 | spider.jpg | 161 KB | 1000 x 667 px | Spider vein treatment |
| 17 | sudoracion axilar 5.jpg | 69 KB | 1400 x 934 px | Axillary hyperhidrosis |

**Total:** 17 images | **Total Size:** ~3.8 MB

---

#### General Purpose Images
**Location:** `assets/images/general/`

| # | Filename | Size | Dimensions | Purpose |
|---|----------|------|------------|---------|
| 1 | recepcion.jpg | 264 KB | 1280 x 960 px | Reception/facility photos |
| 2 | mujer-madura2.jpg | 170 KB | 500 x 333 px | Target demographic |
| 3 | Flyer-Mama (1).jpg | 120 KB | 1500 x 1000 px | Promotional materials |
| 4 | cosmetica.jpg | 506 KB | 1000 x 470 px | Cosmetic products |
| 5 | asesoramiento-medico-estetico.jpg | 27 KB | 1024 x 771 px | Medical consulting |
| 6 | IMG_20260113_155022.jpg | 380 KB | 1200 x 776 px | Facility interior |
| 7 | IMG_20260113_155056.jpg | 610 KB | 1085 x 1097 px | Facility detail |
| 8 | Screenshot_2026-01-13-14-38-49-648_com.android.chrome.jpg | 624 KB | 1096 x 1622 px | Mobile reference/mockup |

**Total:** 8 images | **Total Size:** ~2.7 MB

---

### Fonts
**Location:** `assets/fonts/`

| # | Filename | Format | Weight | Size | Usage |
|---|----------|--------|--------|------|-------|
| 1 | Raleway-Regular.ttf | TrueType | Regular (400) | 126 KB | Body text, paragraphs |
| 2 | Raleway-Medium.ttf | TrueType | Medium (500) | 127 KB | Subheadings, emphasis |
| 3 | Raleway-SemiBold.ttf | TrueType | SemiBold (600) | 128 KB | Headings, buttons |
| 4 | Arial.ttf | TrueType | Regular (400) | 755 KB | Fallback font |

**Total:** 4 font files | **Total Size:** ~1.1 MB

**Font Stack Recommendation:**
```css
font-family: 'Raleway', Arial, sans-serif;
```

---

### Content
**Location:** `content/`

| Filename | Size | Content Type | Language |
|----------|------|--------------|----------|
| extracted_text.txt | 9.3 KB | Website copy | Spanish |

**Content Sections Included:**
- About Us (Quienes somos)
- Doctor's Profile
- Service Descriptions:
  - Medical Facial Area
  - Body Treatments
  - Definitive Hair Removal
  - Wellness Area
  - Dermatocosmetic Consulting

---

## Usage Guidelines by Section

### Homepage

**Hero Section:**
- Use: `spa-masaje-relax-centro-san-sebastian-de-los-reyes-body-massage-by-jose-sanz.jpg` or `recepcion.jpg`
- Alternative: Any high-quality facial treatment image from `facial/`

**Services Overview:**
- Facial: `FACIAL5.jpg` (optimized thumbnail size)
- Body: `masaje_descontracturante.jpg` or `presoterapia.jpg`
- Wellness: `masajes piedras2.jpg` or `californiano.jpg`
- Laser: `depilacion laser.jpg`

### Facial Treatments Page

**Header/Hero:**
- `FACIAL2.jpg`, `FACIAL3.jpg`, `FACIAL6.jpg`, or `FACIAÑ.jpg`

**Treatment Cards:**
- Use `FACIAL5.jpg` as thumbnail or create thumbnails from larger images

**Detailed Treatment Views:**
- Spider veins: `spider.jpg`
- General treatments: Rotate through facial folder images

### Body Treatments Page

**Header/Hero:**
- `masaje_descontracturante.jpg` (great HD resolution)
- `spa-masaje-relax-centro-san-sebastian-de-los-reyes-body-massage-by-jose-sanz.jpg`

**Individual Treatment Sections:**
- Lipolaser: `lipolaser.jpg`
- Pressotherapy: `presoterapia.jpg`
- Electrotherapy: `electroterapia-espalda.jpg`
- Thermotherapy: `termoterapia.jpg`
- Electromagnetic waves: `ondas electromagneticas.jpg`
- Radiofrequency: `radiofrecuencia.jpg`
- Reducing massage: `masaje_reductivo_2.jpg`

### Laser Hair Removal Page

**Primary Image:**
- `depilacion laser.jpg`

### Wellness Area Page

**Header/Hero:**
- `masajes piedras2.jpg` (excellent square crop option)
- `californiano.jpg` (great for vertical layouts)

**Treatment Showcase:**
- Decontracting: `masaje_descontracturante.jpg`
- Californian: `californiano.jpg`
- Ayurvedic: `masajes-terapeuticos-ayurvedicos-madrid-centro-ayurveda-para-ti-abhyanga-dolor.jpeg`
- Reflexology: `reflexologia-podal.jpg`
- Chair massage: `aam-Masaje-express-en-silla-02.jpg`
- Hot stones: `masajes piedras2.jpg`

### About/Contact Page

**Facility Images:**
- `recepcion.jpg` - Reception area
- `IMG_20260113_155022.jpg` - Interior view
- `IMG_20260113_155056.jpg` - Detail shot

**Professional Imagery:**
- `asesoramiento-medico-estetico.jpg`
- `mujer-madura2.jpg` - Target demographic

### Cosmetics/Products Section

**Primary Image:**
- `cosmetica.jpg`

---

## Image Optimization Checklist

### Before Web Deployment

- [ ] Compress all images to reduce file size
- [ ] Create multiple sizes for responsive design:
  - Mobile: 320px, 480px, 768px
  - Desktop: 1024px, 1280px, 1920px
- [ ] Convert to modern formats:
  - Primary: WebP
  - Fallback: JPEG
- [ ] Generate thumbnails for cards and previews
- [ ] Add alt text to all images (see content guide)
- [ ] Test lazy loading implementation
- [ ] Verify image aspect ratios match design

### Target Sizes After Optimization

| Image Type | Max Width | Target File Size | Format |
|------------|-----------|------------------|---------|
| Hero | 1920px | 150-200 KB | WebP |
| Treatment Card | 600px | 50-80 KB | WebP |
| Thumbnail | 300px | 20-40 KB | WebP |
| Gallery | 1200px | 80-120 KB | WebP |

---

## Font Implementation Guide

### Web Font Conversion

Convert TTF fonts to web-optimized formats:

```bash
# Recommended tools:
# - FontSquirrel Web Font Generator
# - transfonter.org
# - fonttools (Python)

# Target formats:
1. WOFF2 (primary - best compression)
2. WOFF (fallback)
3. TTF (legacy fallback)
```

### CSS Implementation

```css
/* Raleway Regular */
@font-face {
  font-family: 'Raleway';
  src: url('../fonts/Raleway-Regular.woff2') format('woff2'),
       url('../fonts/Raleway-Regular.woff') format('woff'),
       url('../fonts/Raleway-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Raleway Medium */
@font-face {
  font-family: 'Raleway';
  src: url('../fonts/Raleway-Medium.woff2') format('woff2'),
       url('../fonts/Raleway-Medium.woff') format('woff'),
       url('../fonts/Raleway-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Raleway SemiBold */
@font-face {
  font-family: 'Raleway';
  src: url('../fonts/Raleway-SemiBold.woff2') format('woff2'),
       url('../fonts/Raleway-SemiBold.woff') format('woff'),
       url('../fonts/Raleway-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

/* Typography Scale */
:root {
  --font-family-primary: 'Raleway', Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
}

body {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-regular);
}

h1, h2, h3 {
  font-weight: var(--font-weight-semibold);
}

.subheading, strong {
  font-weight: var(--font-weight-medium);
}
```

---

## Content Integration Guide

### Text Content Structure

The `extracted_text.txt` file contains all website copy organized by sections:

1. **Homepage Introduction** (Quienes somos)
2. **Doctor Profile** (Conoce a la doctora)
3. **Services Sections:**
   - Área medica facial
   - Área corporal
   - Depilación Definitiva
   - Área Wellness
   - Asesoramiento Dermatocosmético

### Integration Tips

- Each service section includes detailed treatment descriptions
- Use bold text for treatment names and key features
- Maintain medical terminology accuracy
- Preserve Spanish language conventions
- Include all medical disclaimers and qualifications

### SEO Keywords (Spanish)

Key terms found in content:
- medicina estética
- bienestar
- tratamientos faciales
- depilación láser
- masajes terapéuticos
- bioestimulación
- radiofrecuencia
- botox
- ácido hialurónico
- spa
- wellness

---

## File Naming Conventions

### Current Convention
Files use mixed naming conventions:
- Lowercase with underscores: `masaje_reductivo_2.jpg`
- Spaces in names: `depilacion laser.jpg`
- Mixed case: `FACIAL2.jpg`

### Recommended Web Convention
For web deployment, consider standardizing to:
- All lowercase
- Hyphens instead of spaces
- Descriptive names

Example transformations:
- `depilacion laser.jpg` → `depilacion-laser.jpg`
- `FACIAL2.jpg` → `facial-treatment-02.jpg`
- `masaje_reductivo_2.jpg` → `masaje-reductivo-02.jpg`

---

## Quick Reference

### Total Asset Count
- **Images:** 30 files (~16 MB total)
- **Fonts:** 4 files (~1.1 MB total)
- **Content:** 1 text file (9.3 KB)
- **Total Package:** ~17.1 MB (before optimization)

### Estimated Optimized Size
After proper web optimization:
- **Images:** ~3-5 MB (70-85% reduction)
- **Fonts:** ~400-600 KB (45-55% reduction)
- **Total Optimized:** ~4-6 MB

---

*Last Updated: January 24, 2026*
