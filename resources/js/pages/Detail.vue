<template>
    <div>
        <main>
            <ProductDetail />
        </main>
    </div>
</template>

<script>
import ProductDetail from '../components/ProductDetail.vue';

export default {
    name: 'Detail',
    components: {
        ProductDetail,
    },
};
</script>