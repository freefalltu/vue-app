<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <MyButton
            class="navbar__btns-left"
            @click="$router.push('/posts')"
            >
            Список постов
            </MyButton>
            <MyButton 
            class="navbar__btns-left"
            @click="$router.push('/about')"
            >
            О сайте
        </MyButton>
            <MyButton @click="$router.push('/composition')">Composition</MyButton>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
}

.navbar__btns-left {
    margin-right: 20px;
}
</style>