<template>
  <nav class="font-primary fixed top-0 w-full bg-white/95 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div class="flex justify-between items-center">
        <!-- Logo and Brand -->
        <div class="flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="Rigor's LandScaping Logo" class="logo-img">
          <!-- Full brand name on all devices -->
          <h1 class="brand-name" style="font-family:var(--primary-font); color:var(--logo-color);">
            Rigor's LandScaping
          </h1>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-btn md:hidden">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Desktop Navigation -->
        <ul class="desktop-nav hidden md:flex space-x-4 lg:space-x-6">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/services" class="nav-link">Services</router-link></li>
          <li><router-link to="/gallery" class="nav-link">Gallery</router-link></li>
        </ul>
      </div>
      
      <!-- Mobile Navigation Menu -->
      <div v-show="mobileMenuOpen" class="mobile-nav md:hidden mt-4 pt-4 border-t border-gray-200">
        <ul class="flex flex-col space-y-3">
          <li><router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Home</router-link></li>
          <li><router-link to="/services" class="mobile-nav-link" @click="mobileMenuOpen = false">Services</router-link></li>
          <li><router-link to="/gallery" class="mobile-nav-link" @click="mobileMenuOpen = false">Gallery</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  watch: {
    $route() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* Logo Image */
.logo-img {
  width: auto;
  border-radius: 50%;
  object-fit: cover;
}

/* Brand Name  */
.brand-name {
  font-weight: 700;
  white-space: nowrap;
  font-family: var(--primary-font);
  color: var(--logo-color);
}

/* ============================================ */
/* LARGE DESKTOP (1400px and above) */
/* ============================================ */
@media (min-width: 1400px) {
  .brand-name {
    font-size: 72px;
  }
  
  .logo-img {
    height: 80px;
  }
}

/* ============================================ */
/* DESKTOP / LAPTOP (1024px - 1399px)  */
/* ============================================ */
@media (min-width: 1024px) and (max-width: 1399px) {
  .brand-name {
    font-size: 62px;
  }
  
  .logo-img {
    height: 70px;
  }
}

/* ============================================ */
/* SMALL DESKTOP (900px - 1023px) */
/* ============================================ */
@media (min-width: 900px) and (max-width: 1023px) {
  .brand-name {
    font-size: 52px;
  }
  
  .logo-img {
    height: 60px;
  }
}

/* ============================================ */
/* TABLET (768px - 899px) */
/* ============================================ */
@media (min-width: 768px) and (max-width: 899px) {
  .brand-name {
    font-size: 42px;
  }
  
  .logo-img {
    height: 55px;
  }
}

/* ============================================ */
/* LARGE MOBILE (600px - 767px) */
/* ============================================ */
@media (min-width: 600px) and (max-width: 767px) {
  .brand-name {
    font-size: 32px;
  }
  
  .logo-img {
    height: 48px;
  }
}

/* ============================================ */
/* MOBILE (426px - 599px) */
/* ============================================ */
@media (min-width: 426px) and (max-width: 599px) {
  .brand-name {
    font-size: 28px;
  }
  
  .logo-img {
    height: 42px;
  }
}

/* ============================================ */
/* SMALL MOBILE (375px - 425px)  */
/* ============================================ */
@media (max-width: 425px) {
  .brand-name {
    font-size: 24px;
  }
  
  .logo-img {
    height: 38px;
  }
}

/* ============================================ */
/* EXTRA SMALL MOBILE (320px - 374px) */
/* ============================================ */
@media (max-width: 374px) {
  .brand-name {
    font-size: 20px;
  }
  
  .logo-img {
    height: 32px;
  }
}

/* Desktop Navigation Links */
.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  display: inline-block;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 1rem;
  color: var(--charcoal-color);
}

/* Larger nav links on desktop */
@media (min-width: 1024px) {
  .nav-link {
    padding: 0.75rem 1.25rem;
    font-size: 1.1rem;
  }
}

.nav-link:hover {
  background-color: var(--logo-color);
  color: white;
}

.router-link-active {
  background-color: var(--logo-color);
  color: white;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--charcoal-color);
}

/* Mobile Navigation Links */
.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 1rem;
  color: var(--charcoal-color);
  text-align: center;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background-color: var(--logo-color);
  color: white;
}
</style>