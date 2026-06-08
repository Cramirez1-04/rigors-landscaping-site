<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto px-4 py-30 text-center">
        <h1 class="text-5xl md:text-5xl text-white mt-10 mb-6 pb-10 animate-fade-in">
          Transform Your Outdoor Space
        </h1>
        <p
          class="text-xl md:text-2xl text-(--off-white-color) mb-8 max-w-3xl mx-auto"
        >
          Landscaping services that bring your vision to life. Creating
          beautiful, sustainable outdoor spaces you'll love.
        </p>
        
      </div>
    </section>

    <!-- Services Section -->
<section class="py-20 bg-white ">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl  text-gray-800 mb-4">Our Services</h2>
      <p class="service-text text-gray-600 text-lg max-w-2xl mx-auto">
        Comprehensive landscaping solutions tailored to your needs
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.title" 
           class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
        <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${service.image})` }"></div>
        <div class="p-6">
          <!-- Icon and title side by side -->
          <div class="flex items-center gap-3 mb-4">
            <img :src="service.icon" :alt="service.title" class="w-10 h-10 object-contain">
            <h3 class="text-xl font-bold">{{ service.title }}</h3>
          </div>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <router-link to="/services" class="view-more bg-gray-200 hover:bg-(--logo-color) hover:text-(--off-white-color) text-gray-800 mt-8 py-3 px-8 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
        View All Services
      </router-link>
    </div>
  </div>
</section>

    <!-- Testimonials -->
    <section class="py-20 bg-(--off-white-color)">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p class="text-gray-600 text-lg">
            Trusted by hundreds of satisfied customers
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 ">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="bg-gray-50 rounded-xl p-6 font-(--secondary-font) shadow-md hover:shadow-xl transition duration-300"
          >
            <div class="flex items-center mb-4">
              <div class="text-yellow-400">★★★★★</div>
            </div>
            <p class="text-gray-700 mb-4 ">"{{ testimonial.quote }}"</p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center text-xl"
              >
                {{ testimonial.avatar }}
              </div>
              <div>
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
              </div>
            </div>
          </div>
        </div>
        <!--button with link to google reviews-->
        <div class="flex justify-center transition duration-700 transform hover:scale-105">
          <a href="https://www.google.com/maps/place/Rigo%E2%80%99s+Landscaping+LLC/@43.8120198,-91.6723581,6z/data=!4m17!1m8!3m7!1s0x27b74000b82619bd:0xc116840a628b5d1!2sRigo%E2%80%99s+Landscaping+LLC!8m2!3d44.900771!4d-89.5694906!10e1!16s%2Fg%2F11swmwlrp9!3m7!1s0x27b74000b82619bd:0xc116840a628b5d1!8m2!3d44.900771!4d-89.5694906!9m1!1b1!16s%2Fg%2F11swmwlrp9?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="view-more bg-gray-200 hover:bg-(--logo-color) hover:text-(--off-white-color) text-gray-800 mt-8 py-3 px-8 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
            Write A Review
          </a>
        </div>


      </div>
    </section>


    <!-- Contact/Call to Action -->
    <section class="transformation py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us today for a free quote 
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="free-quote bg-white text-green-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Call: (920) 264-8523
          </button>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      services: [
        {
          title: "Landscape Maintenance",
          description:
            "Custom garden designs and spring cleanups",
          icon: "/public/icons/multileaf.png",
          image:
            "/public/images/decorativestones/decorativestones2.jpg",
        },
        {
          title: "Landscape Installation",
          description: "Professional lawn services",
          icon: "/public/icons/leaf.png",
          image:
            "/public/images/landscapingMaintenance/landscapingMaintenance.jpg",
        },
        {
          title: "Tree Services",
          description: "Tree trimming, removal, and stump grinding",
          icon: "/public/icons/tree.png",
          image:
            "/public/images/trimming/trimming1.jpg",
        },
      ],
      testimonials: [
        {
          name: "Joan Malvitz",
          quote:"Rigo landscare and snowplowing plowed my driveway. I called him at last minute and he came over almost immediately. Rigo, did a standup job. I would call Rigo again, great service. Thank you Rigo!",
          avatar: "👨",
        },
        {
          name: "Be Happy",
          quote: "Rigo and his crew provides great work, he is professional, has very reasonable prices, and they always do a great job cleaning up after their work. ",
          avatar: "👨",
        },
        {
          name: "Ricky Y",
          quote:"Rigo and his crew have completed serval projects on our properties over the last few years beautifully and to our 100% satisfaction",
          avatar: "👨",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1e3c32 0%, #2d5a4a 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200")
    center/cover;
  opacity: 0.2;
  animation: slowZoom 20s infinite;
}

@keyframes slowZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
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
  animation: fade-in 1s ease-out;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container h1 {
  font-family: var(--primary-font);
  font-weight: 400;
}
.container h2 {
  font-family: var(--primary-font);
  font-weight: var(--primary-weight);
}

button.free-quote {
  font-family: var(--button-font);
  font-weight: var(--button-weight);
  font-size: var(--button-size);
}
.service-text {
  font-family: var(--paragraph-font);
  font-weight: var(--paragraph-weight);
  font-size: var(--paragraph-size);
}
.transformation{
 background-image: linear-gradient( 90.8deg,  rgb(19, 124, 72) 2.2%, #84cc16 84% );   
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>