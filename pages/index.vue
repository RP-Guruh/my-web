<template>
    <div>
        <!-- Photo profile : rounded & center -->
        <div class="flex justify-center items-center">
            <img class="w-28 h-28 mt-16" src="~/assets/images/profile.png" />
        </div>

        <!-- Perkenalan -->
        <IntroComponent></IntroComponent>

        <div v-for="item in valueButton" class="mt-4"> 
            <Button :title="item"></Button>
        </div>
       
        
        <ChangeMode></ChangeMode>
        
    </div>
</template>

<script setup lang="ts">
    const valueButton: string[] = ["Education", "Skills", "Contact Me", "Portofolio", "Blog"];
   
</script>

