<template>
    <div>
        <!-- Photo profile : rounded & center -->
        <div class="flex justify-center items-center">
            <img class="w-28 h-28 mt-16" src="~/assets/images/profile.png" />
        </div>

        <!-- Perkenalan -->
        <IntroComponent></IntroComponent>

        <div class="flex justify-center items-center mt-10">
            <button type="button" class="w-40 btn text-slate-600 font-bold">Pendidikan</button>
        </div>

        <div class="flex justify-center items-center mt-4">
            <button type="button" class="w-40 btn text-slate-600 font-bold">Keahlian</button>
        </div>

        <div class="flex justify-center items-center mt-4">
            <button type="button" class="w-40 btn text-slate-600 font-bold">Kontak Saya</button>
        </div>
        
    </div>
</template>

<style scoped>
.btn {
    
    border: 3px solid black;
    padding: 10px;
    margin: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px -3px black;
}

.btn:hover {
    transform: translate(-3px, 3px);
    box-shadow: -3px 3px white;

}
</style>
