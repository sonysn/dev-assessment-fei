<script setup lang="ts">
</script>

<template>
  <div class="flex h-[100vh]">
    <div class="w-1/2 bg-customPurple justify-center items-center hidden lg:flex">
      <div class="w-[80%]">
        <img src="/logo.png" alt="logo" class="w-[198px] h-[97px] mb-10">
        <div class="space-y-4">
          <img src="/img.png" alt="logo" class="w-[626px] h-[417px]">
          <p class="justify-center flex font-bold text-[20px] leading-[30px] font-lora text-textPurple">Team Archive</p>
          <p class="justify-center flex font-bold text-[18px] leading-[28px] font-lora text-textGrey">Your perfect solution for funding your desires</p>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex justify-center items-center">
      <div class="w-[91%] lg:w-[80%] lg:-mt-20">
        <div class="flex justify-center lg:hidden"><img src="/logo.png" alt="logo" class="w-[198px] h-[97px] mb-10"></div>
        <p class="justify-center flex font-bold text-[24px] lg:text-[32px] leading-[36px] lg:leading-[48px] font-lora text-textPurple">Welcome Back</p>
        <p class="justify-center flex font-normal text-center text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] font-noto text-textGrey mb-7">Enter your email address and password to access your account.</p>

        <div class="flex flex-col space-y-1 mb-7">
          <label for="email" class="text-gray-700 font-medium">
            Email Address <span class="text-red-500">*</span>
          </label>
          <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="flex flex-col space-y-1 mb-1">
          <label for="password" class="text-gray-700 font-medium">
            Password <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input
                id="password"
                placeholder="Enter your password"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
                type="button"
                class="absolute inset-y-0 right-0 flex items-center px-3"
            >
              <img src="/view-img.png" alt="toggle" class="w-6 h-6">
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between mb-7">
          <label class="flex items-center space-x-2 text-gray-700">
            <input type="checkbox" class="w-4 h-4 border-gray-300 rounded">
            <span class="text-textGrey">Remember me</span>
          </label>

          <a href="#" class="text-textPurple">
            Forgot Password?
          </a>
        </div>

        <button
            class="w-full bg-textPurple text-white font-semibold py-3 rounded-lg text-center mb-2"
        >
          Sign in
        </button>


        <p class="justify-center flex">Don't have an account? <span class="text-textPurple ml-1">Sign Up</span></p>
      </div>
    </div>
  </div>
</template>
