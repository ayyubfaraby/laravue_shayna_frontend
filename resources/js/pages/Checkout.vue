<template>
    <div>
        <main>
            <CheckoutDetail />
        </main>
    </div>
</template>

<script>
import CheckoutDetail from '../components/CheckoutDetail.vue';

export default {
    name: 'Checkout',
    components: {
        CheckoutDetail,
    },
};
</script>