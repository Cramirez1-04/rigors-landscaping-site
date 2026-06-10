<template>
  <footer class="footer mt-20">
    <div class="footer-container">
      <div class="footer-grid">
        
        <!-- Column 1 - Logo -->
        <div class="footer-col logo-col">
          <img src="/favicon.ico" alt="Rigo's Landscaping" class="footer-logo">
        </div>
        
        <!-- Column 2 - Quick Links -->
        <div class="footer-col">
          <h2 class="footer-heading">Quick Links</h2>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/services" class="footer-link">Services</router-link></li>
            <li><router-link to="/gallery" class="footer-link">Gallery</router-link></li>
          </ul>
        </div>
        
        <!-- Column 3 - Contact Info -->
        <div class="footer-col">
          <h2 class="footer-heading">Contact</h2>
          <div class="footer-contact">
            <p class="contact-item">
              <span class="contact-icon">
                <img src="/icons/phone-solid.png" alt="Phone">
              </span>
              <span>(920) 264-8523</span>
            </p>
            <p class="contact-item">
              <span class="contact-icon">
                <img src="/icons/envelope-solid.png" alt="Email">
              </span>
              <span>elijardinero7878@gmail.com</span>
            </p>
            <p class="contact-item">
              <span class="contact-icon">
                <img src="/icons/facebook-f-brands-solid.png" alt="Facebook">
              </span>
              <a href="https://www.facebook.com/rigoslandscapingllc" target="_blank" class="footer-link facebook-link">Rigo's Landscaping</a>
            </p>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© 2026 Rigo's Landscaping LLC • Copyright All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: var(--off-white-color);
  color: var(--charcoal-color);
  padding: 2rem 1rem 1.5rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* BASE MOBILE STYLES (Default - smallest screens) */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
}

.logo-col {
  text-align: center;
}

.footer-logo {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 2px 8px rgba(46, 77, 0, 0.3);
  margin: 0 auto;
}

.footer-heading {
  font-family: var(--primary-font);
  font-weight: var(--primary-weight);
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  text-decoration: underline;
  text-decoration-color: var(--logo-color);
  text-underline-offset: 8px;
  margin-bottom: 1rem;
  color: var(--logo-color);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  font-family: var(--secondary-font);
  font-weight: var(--secondary-weight);
  font-size: 0.85rem;
  color: var(--charcoal-color);
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: var(--logo-color);
}

/* Contact Items - Mobile */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--secondary-font);
  font-weight: var(--secondary-weight);
  font-size: 0.8rem;
  margin: 0;
  flex-wrap: wrap;
  word-break: break-word;
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  flex-shrink: 0;
}

.contact-icon img {
  width: 14px;
  height: 14px;
  object-fit: contain;
  display: block;
}

/* Icon hover effect */
.contact-item:hover .contact-icon img {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

.facebook-link {
  text-decoration: underline;
}

.facebook-link:hover {
  text-decoration: none;
}

/* Footer Bottom Bar - Mobile */
.footer-bottom {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}

.footer-bottom p {
  font-family: var(--secondary-font);
  font-weight: var(--secondary-weight);
  font-size: 0.7rem;
  color: #666;
  margin: 0;
}

/* TABLET BREAKPOINT (768px) */
@media (min-width: 768px) {
  .footer {
    padding: 3rem 2rem 2rem;
  }
  
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: left;
  }
  
  .logo-col {
    text-align: left;
  }
  
  .footer-logo {
    height: 90px;
    width: 90px;
    margin: 0;
  }
  
  .footer-heading {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
  
  .footer-link {
    font-size: 0.9rem;
  }
  
  .contact-item {
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.85rem;
  }
  
  .contact-icon {
    width: 22px;
  }
  
  .contact-icon img {
    width: 16px;
    height: 16px;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    padding-top: 1.25rem;
  }
  
  .footer-bottom p {
    font-size: 0.75rem;
  }
}

/* DESKTOP BREAKPOINT (1024px) */
@media (min-width: 1024px) {
  .footer-grid {
    gap: 3rem;
  }
  
  .footer-logo {
    height: 100px;
    width: 100px;
  }
  
  .footer-heading {
    font-size: 1.3rem;
  }
  
  .footer-link {
    font-size: var(--secondary-font-size);
  }
  
  .contact-item {
    font-size: var(--secondary-font-size);
    gap: 0.75rem;
  }
  
  .contact-icon {
    width: 24px;
  }
  
  .contact-icon img {
    width: 18px;
    height: 18px;
  }
}

/* MOBILE BREAKPOINT (425px) */
@media (max-width: 425px) {
  .footer {
    padding: 1.5rem 0.75rem 1rem;
  }
  
  .footer-grid {
    gap: 1.5rem;
  }
  
  .footer-logo {
    height: 70px;
    width: 70px;
  }
  
  .footer-heading {
    font-size: 1.1rem;
  }
  
  .footer-links {
    gap: 0.5rem;
  }
  
  .footer-link {
    font-size: 0.8rem;
  }
  
  .footer-contact {
    gap: 0.6rem;
  }
  
  .contact-item {
    font-size: 0.75rem;
    gap: 0.4rem;
  }
  
  .contact-icon {
    width: 18px;
  }
  
  .contact-icon img {
    width: 12px;
    height: 12px;
  }
  
  .footer-bottom {
    margin-top: 1.25rem;
    padding-top: 0.875rem;
  }
  
  .footer-bottom p {
    font-size: 0.65rem;
  }
}

/* SMALL MOBILE BREAKPOINT (375px) */
@media (max-width: 375px) {
  .footer {
    padding: 1.25rem 0.6rem 0.875rem;
  }
  
  .footer-grid {
    gap: 1.25rem;
  }
  
  .footer-logo {
    height: 60px;
    width: 60px;
  }
  
  .footer-heading {
    font-size: 1rem;
  }
  
  .footer-link {
    font-size: 0.75rem;
  }
  
  .contact-item {
    font-size: 0.7rem;
    gap: 0.35rem;
  }
  
  .contact-icon {
    width: 16px;
  }
  
  .contact-icon img {
    width: 11px;
    height: 11px;
  }
  
  .footer-bottom p {
    font-size: 0.6rem;
  }
}

/* EXTRA SMALL MOBILE BREAKPOINT (320px) */
@media (max-width: 320px) {
  .footer {
    padding: 1rem 0.5rem 0.75rem;
  }
  
  .footer-logo {
    height: 55px;
    width: 55px;
  }
  
  .footer-heading {
    font-size: 0.95rem;
  }
  
  .footer-link {
    font-size: 0.7rem;
  }
  
  .contact-item {
    font-size: 0.65rem;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .contact-icon {
    width: auto;
  }
  
  .footer-bottom p {
    font-size: 0.55rem;
  }
}
</style>