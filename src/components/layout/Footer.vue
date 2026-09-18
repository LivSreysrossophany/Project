<template>
  <footer class="bg-slate-900 text-slate-300 pt-10 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-sm">
    <div class="max-w-7xl mx-auto">
      <!-- Main Links Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 sm:pb-12 border-b border-slate-800">
        
        <!-- Contact Section -->
        <div class="space-y-3">
          <h3 class="text-white font-bold text-base tracking-wide">Contact Us</h3>
          <address class="not-italic text-xs text-slate-400 space-y-1.5 leading-relaxed">
            <p>Smart Technology Academy , Phnom Penh City, ED 16888</p>
            <p><a href="tel:+15551234567" class="hover:text-white transition-colors duration-200">+(855) 81 248 587</a></p>
            <p>
              <a href="mailto:support@edufind.example" class="text-[#009FB7] hover:underline break-all">
                livsreysrossophany@gmail.com
              </a>
            </p>
          </address>
        </div>

        <!-- Platform Section -->
        <div class="space-y-3">
          <h3 class="text-white font-bold text-base tracking-wide">Platform</h3>
          <ul class="space-y-2 text-xs text-slate-400">
            <!-- Updated to match router path: /About us -->
            <li><RouterLink to="/About us" class="hover:text-white transition-colors duration-200 block py-0.5">About Us</RouterLink></li>
            <li><RouterLink to="/Explore" class="hover:text-white transition-colors duration-200 block py-0.5">Explore</RouterLink></li>
            <li><RouterLink to="/Login" class="hover:text-white transition-colors duration-200 block py-0.5">Log In</RouterLink></li>
            <li><RouterLink to="/Signup" class="hover:text-white transition-colors duration-200 block py-0.5">Sign Up</RouterLink></li>
          </ul>
        </div>

        <!-- Resources Section -->
        <div class="space-y-3">
          <h3 class="text-white font-bold text-base tracking-wide">Resources</h3>
          <ul class="space-y-2 text-xs text-slate-400">
            <!-- Updated to match router path: /Explore -->
            <li><RouterLink to="/Explore" class="hover:text-white transition-colors duration-200 block py-0.5">Scholarship Directory</RouterLink></li>
            <li><RouterLink to="/Explore" class="hover:text-white transition-colors duration-200 block py-0.5">Application Guides</RouterLink></li>
            <li><RouterLink to="/About us" class="hover:text-white transition-colors duration-200 block py-0.5">Eligibility Checker</RouterLink></li>
            <li><RouterLink to="/About us" class="hover:text-white transition-colors duration-200 block py-0.5">FAQ</RouterLink></li>
          </ul>
        </div>

        <!-- Legal Section -->
        <div class="space-y-3">
          <h3 class="text-white font-bold text-base tracking-wide">Legal</h3>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><RouterLink to="/About us" class="hover:text-white transition-colors duration-200 block py-0.5">Privacy Policy</RouterLink></li>
            <li><RouterLink to="/About us" class="hover:text-white transition-colors duration-200 block py-0.5">Terms of Service</RouterLink></li>
            <li><RouterLink to="/About us" class="hover:text-white transition-colors duration-200 block py-0.5">Cookie Policy</RouterLink></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-slate-500 gap-3 sm:gap-0">
        <p>© 2026 EduFind. All rights reserved.</p>
        <p>Find and Apply for Scholarships with Confidence</p>
      </div>
    </div>
  </footer>
</template>