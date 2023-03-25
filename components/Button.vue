<template>
    <div class="flex justify-center items-center">
        <button type="button" class="w-40 btn text-slate-700 font-bold">{{ title }}</button>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    marginTop: String
});
</script>


<style scoped>
.btn {
    
    border: 3px solid black;
    padding: 10px;
    margin: 17px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px -3px black;
}

.btn:hover {
    transform: translate(-3px, 3px);
    box-shadow: -3px 3px white;

}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
a:focus,a:visited,a:active{
  outline: none;
}
* {
    -webkit-tap-highlight-color: transparent;
}
</style>