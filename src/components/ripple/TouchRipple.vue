<template>
    <div @mousedown="handleMouseDown" @mouseup="end" @mouseleave="end" @touchstart="handleTouchStart" @touchend="end" @touchcancel="end">
        <div :style="style" ref="holder">
            <circle-ripple v-for="ripple in ripples" :key="ripple.key" :color="ripple.color" :opacity="ripple.opacity" :merge-style="ripple.style"></circle-ripple>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import CircleRipple from './CircleRipple'
export default {
    components: {
        'circle-ripple': CircleRipple
    }
}
</script>

