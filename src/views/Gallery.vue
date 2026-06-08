<template>
  <div>
    <!-- Hero Section -->
    <section class="gallery-hero">
      <div class="container mx-auto px-4 py-16 md:py-20 text-center">
        <h1 class="text-(--warm-cream text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Our Work Gallery
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Browse through our transformations and see the quality of our work
        </p>
      </div>
    </section>

    <!-- Category Tabs - Responsive -->
    <section class="sticky top-16 z-10" style="background-color: var(--off-white-color);">
      <div class="container mx-auto px-4">
        <!-- Desktop: Horizontal scrollable tabs -->
        <div class="category-tabs-wrapper">
          <div class="category-tabs-container">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              class="category-tab"
              :class="{ active: activeCategory === category.id }"
            >
              <img :src="getImageUrl(category.icon)" alt="category.name" class="category-icon">
              <span class="category-name">{{ category.name }}</span>
            </button>
          </div>
        </div>
        
        <!-- Mobile: Dropdown Select -->
        <div class="category-dropdown">
          <select 
            v-model="activeCategory" 
            class="category-select"
            @change="activeCategory = $event.target.value"
          >
            <option 
              v-for="category in categories" 
              :key="category.id" 
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-12 md:py-16" style="background-color: var(--warm-cream-color);">
      <div class="container mx-auto px-4">
        <!-- Category Title -->
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-2" style="color: var(--charcoal-color); font-family: var(--secondary-font);">
            {{ currentCategory.name }}
          </h2>
          <p class="text-gray-600">{{ currentCategory.description }}</p>
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <!-- Regular images -->
          <div
            v-for="(image, index) in currentCategoryImages"
            :key="'reg-' + image.id"
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <div class="image-wrapper">
              <img :src="getImageUrl(image.url)" :alt="image.title || currentCategory.name" loading="lazy">
            </div>
          </div>

          <!-- Before/After Cards -->
          <div
            v-for="(pair, index) in beforeAfterPairs"
            :key="'ba-' + pair.id"
            class="gallery-item before-after-card"
            @click="openBeforeAfterLightbox(index)"
          >
            <div class="image-wrapper before-after-wrapper">
              <div class="ba-half ba-before">
                <img :src="getImageUrl(pair.beforeUrl)" :alt="'Before ' + pair.title">
                <span class="ba-label before-label">BEFORE</span>
              </div>
              <div class="ba-half ba-after">
                <img :src="getImageUrl(pair.afterUrl)" :alt="'After ' + pair.title">
                <span class="ba-label after-label">AFTER</span>
              </div>
              <div class="ba-arrow">→</div>
            </div>
            <div class="ba-title" v-if="pair.title">
              {{ pair.title }}
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="currentCategoryImages.length === 0 && beforeAfterPairs.length === 0" class="text-center py-16">
          <div class="text-6xl mb-4">📸</div>
          <p class="text-gray-500 text-lg">No images available for this category yet.</p>
          <p class="text-gray-400">Check back soon for updates!</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal for Regular Images -->
    <div v-if="lightboxOpen && lightboxType === 'regular'" class="lightbox" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <button class="lightbox-prev" @click.stop="prevImage">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button class="lightbox-next" @click.stop="nextImage">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      <div class="lightbox-content" @click.stop>
        <img :src="getImageUrl(currentImage.url)" :alt="currentImage.title || currentCategory.name">
        <div class="lightbox-info" v-if="currentImage.title">
          <h3>{{ currentImage.title }}</h3>
          <span class="lightbox-category">{{ currentCategory.name }}</span>
        </div>
      </div>
      
      <div class="lightbox-counter">
        {{ lightboxIndex + 1 }} / {{ regularImages.length }}
      </div>
    </div>

    <!-- Before/After Lightbox Modal -->
    <div v-if="lightboxOpen && lightboxType === 'beforeafter'" class="lightbox" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <button class="lightbox-prev" @click.stop="prevBeforeAfter">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button class="lightbox-next" @click.stop="nextBeforeAfter">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      <div class="lightbox-content" @click.stop>
        <div class="lightbox-ba-container">
          <div class="lightbox-ba-half">
            <img :src="getImageUrl(currentBeforeAfterPair.beforeUrl)" alt="Before">
            <div class="lightbox-ba-label before">BEFORE</div>
          </div>
          <div class="lightbox-ba-half">
            <img :src="getImageUrl(currentBeforeAfterPair.afterUrl)" alt="After">
            <div class="lightbox-ba-label after">AFTER</div>
          </div>
        </div>
        <div class="lightbox-info" v-if="currentBeforeAfterPair.title">
          <h3>{{ currentBeforeAfterPair.title }}</h3>
          <span class="lightbox-category">{{ currentCategory.name }}</span>
        </div>
      </div>
      
      <div class="lightbox-counter">
        {{ beforeAfterIndex + 1 }} / {{ beforeAfterPairs.length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL,
      activeCategory: 'spring',
      lightboxOpen: false,
      lightboxType: 'regular',
      lightboxIndex: 0,
      beforeAfterIndex: 0,
      categories: [
        {
          id: 'spring',
          name: 'Transformations',
          icon: '/icons/clover-solid.png',
          description: 'Before and after our spring transformation services'
        },
        {
          id: 'leaf',
          name: 'Leaf Clean Ups',
          icon: '/icons/leaf.png',
          description: 'See how we restore lawns to their pristine condition'
        },
        {
          id: 'snow',
          name: 'Snow Removal',
          icon: '/icons/snowflake-regular.png',
          description: 'Professional snow clearing for safe access'
        },
        {
          id: 'trimming',
          name: 'Trimming',
          icon: '/icons/scissors-solid.png',
          description: 'Expert hedge and shrub trimming results'
        },
        {
          id: 'planting',
          name: 'Planting',
          icon: '/icons/multileaf.png',
          description: 'New gardens, bushes, and flower installations'
        },
        {
          id: 'decorative',
          name: 'Decorative',
          icon: '/icons/stone.png',
          description: 'Mulch, rock, and decorative stone projects'
        },
        {
          id: 'tree',
          name: 'Tree Services',
          icon: '/icons/tree.png',
          description: 'Tree removal, trimming, and stump grinding'
        }
      ],
      regularGalleryImages: {
        spring:[
          { id: 1, title: 'Lawn Cleanup', url: '/images/landscapingMaintenance/landscapingMaintenance1.jpg' },
          { id: 2, title: 'Lawn Cleanup', url: '/images/landscapingMaintenance/landscapingMaintenance10.jpg' },
          { id: 3, title: 'Lawn Cleanup', url: '/images/landscapingMaintenance/landscapingMaintenance2.jpg' },
        ],
        leaf: [
          { id: 4, title: 'Leaf Cleanup', url: '/images/leafremoval/leafremoval1.jpg' },
          { id: 5, title: 'Leaf Cleanup', url: '/images/leafremoval/leafremoval2.jpg' },
          { id: 6, title: 'Leaf Cleanup', url: '/images/leafremoval/leafremoval3.jpg' }
        ],
        snow: [
          { id: 7, title: 'Snow Clearing', url: '/images/snowremoval/snowremoval1.jpg' },
          { id: 8, title: 'Snow Clearing', url: '/images/snowremoval/snowremoval2.jpg' },
          { id: 9, title: 'Snow Clearing', url: '/images/snowremoval/snowremoval3.jpg' },
          { id: 10, title: 'Snow Clearing', url: '/images/snowremoval/snowremoval4.jpg' },
          { id: 11, title: 'Snow Clearing', url: '/images/snowremoval/snowremoval5.jpg' },
          { id: 12, title: 'Snow Clearing', url: '/images/snowremoval/snowremoval6.jpg' }
        ],
        trimming: [
          { id: 13, title: 'Trimming', url: '/images/trimming/trimming1.jpg' },
          { id: 14, title: 'Bush Trimming', url: '/images/trimming/trimming2.jpg' },
          { id: 15, title: 'Bush Trimming', url: '/images/trimming/trimming3.jpg' },
          { id: 16, title: 'Bush Trimming', url: '/images/trimming/trimming4.jpg' },
          { id: 17, title: 'Bush Trimming', url: '/images/trimming/trimming5.jpg' },
          { id: 18, title: 'Bush Trimming', url: '/images/trimming/trimming6.jpg' }
        ],
        planting: [
          { id: 19, title: 'Installing plants', url: '/images/planting/planting1.jpg' },
          { id: 20, title: 'Flower Bed Design', url: '/images/planting/planting2.jpg' },
          { id: 21, title: 'Flower Bed Design', url: '/images/planting/planting3.jpg' }
        ],
        tree: [
          { id: 22, title: 'Tree Services', url: '/images/treeservices/treeservice1.jpg' },
          { id: 23, title: 'Tree Services', url: '/images/treeservices/treeservice2.jpg' },
          { id: 24, title: 'Tree Services', url: '/images/treeservices/treeservice3.jpg' },
          { id: 25, title: 'Tree Services', url: '/images/treeservices/treeservice4.jpg' },
          { id: 26, title: 'Tree Services', url: '/images/treeservices/treeservice5.jpg' },
        ],
        decorative: [
          { id: 27, title: 'Decorative Stones', url: '/images/decorativestones/decorativestones1.jpg' },
          { id: 28, title: 'Decorative Stones', url: '/images/decorativestones/decorativestones2.jpg' },
          { id: 29, title: 'Decorative Stones', url: '/images/decorativestones/decorativestones3.jpg' },
          { id: 30, title: 'Decorative Stones', url: '/images/decorativestones/decorativestones4.jpg' },
          { id: 31, title: 'Decorative Stones', url: '/images/decorativestones/decorativestones5.jpg' },
          { id: 32, title: 'Decorative Stones', url: '/images/decorativestones/decorativestones6.jpg' },

        ]
      },
      beforeAfterImages: {
        spring: [
          {
            id: 1,
            title: 'Sidewalk Transformation',
            beforeUrl: '/images/beforeAndAfter/landscapebefore1.jpg',
            afterUrl: '/images/beforeAndAfter/landscapeafter1.jpg'
          },
          {
            id: 2,
            title: 'Mulch Installation Project',
            beforeUrl: '/images/beforeAndAfter/mulchInstallationBefore1.jpg',
            afterUrl: '/images/beforeAndAfter/mulchInstallationAfter1.jpg'
          },
          {
            id: 3,
            title:'Mulch Installation Project',
            beforeUrl: '/images/beforeAndAfter/mulchinstallationbefore2.jpg',
            afterUrl: '/images/beforeAndAfter/mulchinstallationafter2.jpg',
          },
          {
            id: 4,
            title:'Tree Removal Project',
            beforeUrl: '/images/beforeAndAfter/treeservicebefore1.jpg',
            afterUrl: '/images/beforeAndAfter/treeserviceafter1.jpg',
          },
          {
            id: 5,
            title:'Tree Removal Project',
            beforeUrl: '/images/beforeAndAfter/treeservicebefore2.jpg',
            afterUrl: '/images/beforeAndAfter/treeserviceafter2.jpg',
          },
          {
            id: 6,
            title:'Leaf Removal Project',
            beforeUrl: '/images/beforeAndAfter/leafremovalbefore1.jpg',
            afterUrl: '/images/beforeAndAfter/leafremovalafter1.jpg',
          },
        ],
        leaf: [],
        snow: [],
        trimming: [],
        planting: [],
        tree: []
      }
    }
  },
  computed: {
    getImageUrl(){
      return(path) => {
        if(!path) return ''
        const cleanPath = path.startsWith('/') ? path.slice(1): path
        return `${this.baseUrl}${cleanPath}`
      }
    },
    currentCategory() {
      return this.categories.find(cat => cat.id === this.activeCategory)
    },
    currentCategoryImages() {
      return this.regularGalleryImages[this.activeCategory] || []
    },
    beforeAfterPairs() {
      return this.beforeAfterImages[this.activeCategory] || []
    },
    regularImages() {
      return this.currentCategoryImages
    },
    currentImage() {
      return this.regularImages[this.lightboxIndex] || {}
    },
    currentBeforeAfterPair() {
      return this.beforeAfterPairs[this.beforeAfterIndex] || {}
    }
  },
  methods: {
    openLightbox(index) {
      this.lightboxType = 'regular'
      this.lightboxIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    openBeforeAfterLightbox(index) {
      this.lightboxType = 'beforeafter'
      this.beforeAfterIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    prevImage() {
      if (this.lightboxIndex > 0) {
        this.lightboxIndex--
      } else {
        this.lightboxIndex = this.regularImages.length - 1
      }
    },
    nextImage() {
      if (this.lightboxIndex < this.regularImages.length - 1) {
        this.lightboxIndex++
      } else {
        this.lightboxIndex = 0
      }
    },
    prevBeforeAfter() {
      if (this.beforeAfterIndex > 0) {
        this.beforeAfterIndex--
      } else {
        this.beforeAfterIndex = this.beforeAfterPairs.length - 1
      }
    },
    nextBeforeAfter() {
      if (this.beforeAfterIndex < this.beforeAfterPairs.length - 1) {
        this.beforeAfterIndex++
      } else {
        this.beforeAfterIndex = 0
      }
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.gallery-hero {
  background: linear-gradient(135deg, var(--deep-green-color) 0%, var(--logo-color) 100%);
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding-top: 70px;
}

.gallery-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200') center/cover;
  opacity: 0.15;
  animation: slowZoom 20s infinite;
}

.gallery-hero h1,
.gallery-hero p {
  position: relative;
  z-index: 1;
  color: var(--off-white-color);
}

@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

/* ============================================ */
/* RESPONSIVE CATEGORY TABS */
/* ============================================ */

/* Hide dropdown on desktop, show tabs */
.category-dropdown {
  display: none;
}

.category-tabs-wrapper {
  display: block;
}

.category-tabs-container {
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.75rem 0;
  scrollbar-width: thin;
  -ms-overflow-style: auto;
}

.category-tabs-container::-webkit-scrollbar {
  height: 4px;
}

.category-tabs-container::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 10px;
}

.category-tabs-container::-webkit-scrollbar-thumb {
  background: var(--logo-color);
  border-radius: 10px;
}

/* Category Tab Styles */
.category-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
  border: 2px solid var(--logo-color);
  color: var(--charcoal-color);
  white-space: nowrap;
  flex-shrink: 0;
}

.category-tab:hover {
  background: var(--logo-color);
  color: var(--off-white-color);
  transform: translateY(-2px);
}

.category-tab.active {
  background: var(--logo-color);
  color: var(--off-white-color);
  box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3);
}

.category-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.category-name {
  font-size: 0.85rem;
  font-weight: 600;
}

/* ============================================ */
/* TABLET BREAKPOINT (768px - 1023px) */
/* ============================================ */
@media (min-width: 768px) and (max-width: 1023px) {
  .category-tab {
    padding: 0.45rem 1rem;
    gap: 0.4rem;
  }
  
  .category-icon {
    width: 18px;
    height: 18px;
  }
  
  .category-name {
    font-size: 0.8rem;
  }
  
  .category-tabs-container {
    gap: 0.4rem;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: visible;
  }
}

/* ============================================ */
/* MOBILE BREAKPOINT (767px and below) */
/* ============================================ */
@media (max-width: 767px) {
  /* Hide horizontal scrollable tabs on mobile */
  .category-tabs-wrapper {
    display: none;
  }
  
  /* Show dropdown selector on mobile */
  .category-dropdown {
    display: block;
    padding: 0.75rem 0;
  }
  
  .category-select {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    font-family: var(--secondary-font);
    font-weight: 500;
    color: var(--charcoal-color);
    background-color: white;
    border: 2px solid var(--logo-color);
    border-radius: 50px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2384cc16' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2em;
  }
  
  .category-select:focus {
    box-shadow: 0 0 0 3px rgba(132, 204, 22, 0.2);
  }
  
  .category-select option {
    padding: 0.5rem;
    font-family: var(--secondary-font);
  }
}

/* ============================================ */
/* SMALL MOBILE (425px and below) */
/* ============================================ */
@media (max-width: 425px) {
  .category-select {
    padding: 0.65rem 1rem;
    font-size: 0.85rem;
  }
}

/* Gallery Grid - Responsive */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
}

.gallery-item {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.gallery-item:active {
  transform: scale(0.98);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  background: #f0f0f0;
}

@media (max-width: 768px) {
  .image-wrapper {
    height: 250px;
  }
}

@media (max-width: 425px) {
  .image-wrapper {
    height: 220px;
  }
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Before/After Card Styles */
.before-after-wrapper {
  display: flex;
  position: relative;
  gap: 6px;
}

.ba-half {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.ba-half img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ba-label {
  position: absolute;
  bottom: 10px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(0,0,0,0.7);
}

@media (max-width: 425px) {
  .ba-label {
    font-size: 0.5rem;
    padding: 2px 5px;
    bottom: 5px;
  }
}

.before-label {
  left: 10px;
  color: #ff6b6b;
}

.after-label {
  right: 10px;
  color: var(--logo-color);
}

.ba-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background: var(--logo-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--charcoal-color);
  font-size: 1.2rem;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

@media (max-width: 425px) {
  .ba-arrow {
    width: 24px;
    height: 24px;
    font-size: 0.9rem;
  }
}

.ba-title {
  margin-top: 8px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--charcoal-color);
}

@media (max-width: 425px) {
  .ba-title {
    font-size: 0.75rem;
  }
}

/* Lightbox Before/After */
.lightbox-ba-container {
  display: flex;
  gap: 2px;
  background: #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  width: 90vw;
  max-width: 1300px;
  height: 75vh;
  min-height: 450px;
  max-height: 80vh;
}

@media (max-width: 768px) {
  .lightbox-ba-container {
    flex-direction: column;
    height: auto;
    max-height: 85vh;
  }
  
  .lightbox-ba-half {
    min-height: 250px;
  }
}

.lightbox-ba-half {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
  overflow: hidden;
}

.lightbox-ba-half img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.lightbox-ba-label {
  position: absolute;
  top: 20px;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 30px;
  background: rgba(0,0,0,0.8);
}

@media (max-width: 425px) {
  .lightbox-ba-label {
    top: 10px;
    padding: 4px 12px;
    font-size: 0.7rem;
  }
}

.lightbox-ba-label.before {
  left: 20px;
  color: #ff6b6b;
}

.lightbox-ba-label.after {
  right: 20px;
  color: var(--logo-color);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
}

.lightbox-content img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-info {
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  padding: 1rem;
}

.lightbox-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.lightbox-info p {
  font-size: 0.875rem;
  opacity: 0.8;
}

.lightbox-category {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: var(--logo-color);
  color: var(--charcoal-color);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
}

.lightbox-prev {
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
}

.lightbox-next {
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: var(--logo-color);
  transform: scale(1.05);
}

.lightbox-counter {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section Responsive */
@media (max-width: 768px) {
  .gallery-hero h1 {
    font-size: 2rem;
  }
  
  .gallery-hero p {
    font-size: 1rem;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 425px) {
  .gallery-hero {
    padding-top: 60px;
  }
  
  .gallery-hero h1 {
    font-size: 1.75rem;
  }
  
  .gallery-hero p {
    font-size: 0.9rem;
  }
}
</style>