<template>
    <div>
        <main>
        <Carousel />
        <CardSlider />
        <BrandList />
        <LogoList />
        </main>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CardSlider from '../components/CardSlider.vue';
import BrandList from '../components/BrandList.vue';
import LogoList from '../components/LogoList.vue';

export default {
    name: 'Home',
    components: {
        Carousel,
        CardSlider,
        BrandList,
        LogoList,
    },
};
</script>

<style scoped>

</style>
