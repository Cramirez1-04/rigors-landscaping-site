<template>
  <div>
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Our Services
        </h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          Comprehensive landscaping solutions 
        </p>
      </div>
    </section>
    

    <!-- Services Grid Section -->
    <section class="py-20" style="background-color: var(--warm-cream-color);">
      <div class="container mx-auto px-4">
        <!-- Category Filters -->
        <div class="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="category-btn"
            :class="{ active: activeCategory === category }"
          >
            {{ category }}
          </button>
        </div>

        <!-- Services Grid -->
        <div class="services-grid">
          <div
            v-for="service in filteredServices"
            :key="service.id"
            class="service-card group"
          >
            <div class="service-image-wrapper">
              <div class="service-image" :style="{ backgroundImage: `url(${getImageUrl(service.image)})` }"></div>
              <div class="service-overlay">
                
              </div>
            </div>
            <div class="service-content">
              <!-- FIXED: Use getImageUrl for icon -->
              <img :src="getImageUrl(service.icon)" :alt="service.title" class="service-icon-img">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.shortDescription }}</p>
              <div class="service-footer">
                <span class="service-category">{{ service.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL,
      activeCategory: 'All',
      categories: ['All', 'Clean Ups', 'Snow Removal', 'Maintenance', 'Planting', 'Decorative', 'Tree Services'],
      services: [
        {
          id: 1,
          title: 'Spring Clean Ups',
          category: 'Clean Ups',
          shortDescription: 'Remove winter debris, prepare beds, and get your garden ready for spring growth',
          fullDescription: 'Comprehensive spring cleaning to revitalize your landscape',
          icon: '/icons/leaf.png',
          image: '/images/landscapingMaintenance/landscapingMaintenance.jpg',
        },
        {
          id: 2,
          title: 'Snow Removal',
          category: 'Snow Removal',
          shortDescription: 'Professional snow plowing, and shoveling services',
          fullDescription: 'Keep your property safe and accessible during winter',
          icon: '/icons/snowflake-regular.png',
          image: '/images/snowremoval/snowremoval1.jpg',
        
        },
        {
          id: 3,
          title: 'Leaf Clean Ups',
          category: 'Clean Ups',
          shortDescription: 'Complete leaf removal, bagging, and disposal service',
          fullDescription: 'Keep your lawn healthy with professional leaf removal',
          icon: '/icons/multileaf.png',
          image: '/images/leafremoval/leafremoval1.jpg',
          
        },
        {
          id: 4,
          title: 'Trimming Services',
          category: 'Maintenance',
          shortDescription: 'Professional hedge, bush, and shrub trimming',
          fullDescription: 'Keep your shrubs and hedges looking perfect',
          icon: '/icons/scissors-solid.png',
          image: '/images/trimming/trimming3.jpg',
         
        },
        {
          id: 5,
          title: 'Planting Services',
          category: 'Planting',
          shortDescription: 'New bushes, plants, and flowers installation',
          fullDescription: 'Transform your landscape with professionally selected plants',
          icon: '/icons/seedling-solid.png',
          image: '/images/planting/planting2.jpg',
        },
        {
          id: 6,
          title: 'Decorative Services',
          category: 'Decorative',
          shortDescription: 'Mulch, rock, and decorative stone installation',
          fullDescription: 'Enhance your landscape with decorative elements',
          icon: '/icons/stone.png',
          image: '/images/decorativestones/decorativestones2.jpg',
          
        },
        {
          id: 7,
          title: 'Tree Removal',
          category: 'Tree Services',
          shortDescription: 'Safe and professional tree removal',
          fullDescription: 'Expert removal for dangerous or unwanted trees',
          icon: '/icons/person-digging-solid.png',
          image: '/images/treeservices/treeservice5.jpg',
          
        },
        {
          id: 8,
          title: 'Tree Trimming',
          category: 'Tree Services',
          shortDescription: 'Professional tree pruning and trimming',
          fullDescription: 'Maintain tree health and safety',
          icon: '/icons/tree.png',
          image: '/images/treeservices/treeservice4.jpg',
        
        },
        {
          id: 9,
          title: 'Stump Grinding',
          category: 'Tree Services',
          shortDescription: 'Complete stump removal and grinding',
          fullDescription: 'Remove unsightly tree stumps from your property',
          icon: '/icons/mound-solid.png',
          image: '/images/treeservices/treeservice6.jpg',
         
        }
      ]
    }
  },
  computed: {
    filteredServices() {
      if (this.activeCategory === 'All') {
        return this.services
      }
      return this.services.filter(service => service.category === this.activeCategory)
    }
  },
  methods: {
    getImageUrl(path) {
      if (!path) return ''
      // Remove leading slash if present to avoid double slashes
      const cleanPath = path.startsWith('/') ? path.slice(1) : path
      return `${this.baseUrl}${cleanPath}`
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.services-hero {
  background: linear-gradient(135deg, var(--deep-green-color) 0%, var(--logo-color) 100%);
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding-top: 90px;
}

.services-hero::before {
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

.services-hero h1,
.services-hero p {
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

/* Category Buttons - Responsive */
.category-btn {
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid var(--logo-color);
  background: transparent;
  color: var(--charcoal-color);
  font-family: var(--secondary-font);
}

.category-btn:hover {
  background: var(--logo-color);
  color: var(--off-white-color);
  transform: translateY(-2px);
}

.category-btn.active {
  background: var(--logo-color);
  color: var(--off-white-color);
  box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3);
}



/* Services Grid - Responsive */
.services-grid {
  display: grid;
  gap: 2rem;
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1023px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
  }
}

/* Mobile: 1 column */
@media (max-width: 767px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Service Cards */
.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Service Image - Responsive Height */
.service-image-wrapper {
  position: relative;
  overflow: hidden;
}

/* Desktop image height */
@media (min-width: 1024px) {
  .service-image-wrapper {
    height: 210px;
  }
}

/* Tablet image height */
@media (min-width: 768px) and (max-width: 1023px) {
  .service-image-wrapper {
    height: 200px;
  }
}

/* Mobile image height */
@media (max-width: 767px) {
  .service-image-wrapper {
    height: 200px;
  }
}

/* Small mobile */
@media (max-width: 425px) {
  .service-image-wrapper {
    height: 180px;
  }
}

.service-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.service-card:hover .service-image {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

/* Service Content - Responsive Padding */
.service-content {
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .service-content {
    padding: 1.25rem;
  }
}

@media (max-width: 425px) {
  .service-content {
    padding: 1rem;
  }
}

/* Service Icon Image  */
.service-icon-img {
  object-fit: contain;
  margin-bottom: 0.75rem;
}

/* Desktop icon size */
@media (min-width: 1024px) {
  .service-icon-img {
    width: 50px;
    height: 50px;
  }
}

/* Tablet icon size */
@media (min-width: 768px) and (max-width: 1023px) {
  .service-icon-img {
    width: 45px;
    height: 45px;
  }
}

/* Mobile icon size */
@media (max-width: 767px) {
  .service-icon-img {
    width: 40px;
    height: 40px;
  }
}

/* Small mobile icon size (425px and below) */
@media (max-width: 425px) {
  .service-icon-img {
    width: 35px;
    height: 35px;
  }
}

/* Extra small mobile */
@media (max-width: 375px) {
  .service-icon-img {
    width: 30px;
    height: 30px;
  }
}

/* Service Title - Responsive */
.service-title {
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--charcoal-color);
  font-family: var(--primary-font);
}

/* Desktop title */
@media (min-width: 1024px) {
  .service-title {
    font-size: 1.7rem;
  }
}

/* Tablet title */
@media (min-width: 768px) and (max-width: 1023px) {
  .service-title {
    font-size: 2rem;
  }
  
}

/* Mobile title */
@media (max-width: 767px) {
  .service-title {
    font-size: 1.2rem;
  }
}

/* Small mobile title */
@media (max-width: 425px) {
  .service-title {
    font-size: 1.5rem;
  }
}

/* Service Description  */
.service-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: var(--paragraph-font);
}

/* Desktop  */
@media (min-width: 1024px) {

  .service-description {
    font-size: 1.2rem;
  }
}

/* Tablet and mobile */
@media (max-width: 1023px) {
  .service-description {
    font-size: 0.85rem;
  }
}

/* Small mobile */
@media (max-width: 425px) {
  .service-description {
    font-size: 1.2rem;
    line-height: 1.4;
  }
}

/* Service Footer - Responsive */
.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
}

@media (max-width: 425px) {
  .service-footer {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
    text-align: center;
  }
}

.service-category {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(132, 204, 22, 0.1);
  color: var(--deep-green-color);
  border-radius: 50px;
  font-weight: 500;
}

@media (max-width: 425px) {
  .service-category {
    display: inline-block;
    width: fit-content;
    margin: 0 auto;
  }
}


@media (max-width: 425px) {
  .service-price {
    font-size: 0.8rem;
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section Responsive */
@media (max-width: 768px) {
  .services-hero h1 {
    font-size: 2.5rem;
  }
  
  .services-hero p {
    font-size: 1.125rem;
  }
  
  .category-btn {
    padding: 0.4rem 1rem;
    font-size: 0.875rem;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .service-description{
    font-size: 1.1rem;
  }
}

@media (max-width: 425px) {
  .services-hero h1 {
    font-size: 2.5rem;
  }
  
  .services-hero p {
    font-size: 1.4rem;
  }
  
  .category-btn {
    padding: 0.35rem 0.85rem;
    font-size: 1rem;
  }
}

/* Category filter row responsiveness */
@media (max-width: 640px) {
  .flex.justify-center.gap-3 {
    gap: 0.5rem;
  }
}

/*laptops > 1440px */
@media (min-width: 1280px) and (max-width: 1440px) {
  /* Container */
  .container {
    max-width: 1280px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  /* Hero Section */
  .services-hero {
    padding-top: 120px;
  }
  
  .services-hero h1 {
    font-size: 5rem;
  }
  
  .services-hero p {
    font-size: 2rem;
  }
  
  /* Category Buttons */
  .category-btn {
    padding: 0.7rem 1.75rem;
    font-size: 1.2rem;
  }
  
  /* Services Grid - 3 columns remain but with adjusted gap */
  .services-grid {
    gap: 1.5rem;
  }
  
  /* Service Cards */
  .service-image-wrapper {
    height: 220px;
  }
  
  .service-content {
    padding: 1.5rem;
  }
  
  .service-icon-img {
    width: 55px;
    height: 55px;
  }
  
  .service-title {
    font-size: 1.9rem;
    margin-bottom: 1rem;
  }
  
  .service-description {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
  
  .service-footer {
    padding-top: 1rem;
  }
  
  .service-category {
    font-size: 0.85rem;
    padding: 0.3rem 0.85rem;
  }
}

@media (min-width: 1440px) and (max-width: 2560px) {
  /* Container */
  .container {
    max-width: 2560px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  
  /* Hero Section */
  .services-hero {
    padding-top: 130px;
  }
  
  .services-hero h1 {
    font-size: 6rem;
  }
  
  .services-hero p {
    font-size: 2rem;
  }
  
  /* Category Buttons */
  .category-btn {
    padding: 0.7rem 2rem;
    font-size: 2rem;
  }
  
  .services-grid {
    gap: 1.8rem;
  }
  
  /* Service Cards */
  .service-image-wrapper {
    height: 450px;
  }
  
  .service-content {
    padding: 1.5rem;
  }
  
  .service-icon-img {
    width: 55px;
    height: 55px;
  }
  
  .service-title {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
  
  .service-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
  
  .service-footer {
    padding-top: 1rem;
  }
  
  .service-category {
    font-size: 1.6rem;
    padding: 0.3rem 0.85rem;
  }
}
</style>