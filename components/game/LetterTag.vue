<template>
  <div
    v-if="sign !== '|'"
    class="letter-tag"
    :class="styles"
    ref="letterEl"
  >
    {{ sign }}
  </div>
  <br v-else />
</template>

<script setup>
// import { getCurrentInstance} from "vue";

const emit = defineEmits(['letter-tag--show'])

const props = defineProps({
  sign: { type: String, default: ' ' },
  isKilled: { type: Boolean, default: false },
  isShow: { type: Boolean, default: false },
})

// const isShow = ref(props.isShow);
const letterEl = ref(null);
const x1 = ref(null);
const x2 = ref(null);
const y1 = ref(null);
const y2 = ref(null);
const id = ref(getCurrentInstance().vnode.key);

const styles = computed(() => {
  return [{ show: props.isShow }, { hide: props.isKilled }]
});

const updateData = () => {
  // console.log('letterEl', letterEl.value, letterEl.value.getBoundingClientRect());
  if (!letterEl.value) return;
  let rect = letterEl.value.getBoundingClientRect()
  x1.value = Math.ceil(rect.left)
  y1.value = Math.ceil(rect.top)
  x2.value = Math.ceil(rect.left + letterEl.value.clientWidth)
  y2.value = Math.ceil(rect.top + letterEl.value.clientHeight)
};

// console.log('isShow', isShow);
watch(() => props.isShow, () => {
  updateData()
  // console.log('watch', {
  //   x1: x1.value,
  //   x2: x2.value,
  //   y1: y1.value,
  //   y2: y2.value,
  //   id: id.value
  // });
  emit('letter-tag--show', {
    // x1,
    // x2,
    // y1,
    // y2,
    // id
    x1: x1.value,
    x2: x2.value,
    y1: y1.value,
    y2: y2.value,
    id: id.value
  })
})

// export default {
  // name: 'LetterTag',
  // props: {
  //   sign: { type: String, default: ' ' },
  //   isKilled: { type: Boolean, default: false },
  //   isShow: { type: Boolean, default: false },
  // },
  // data() {
  //   return {
  //     x1: null,
  //     x2: null,
  //     y1: null,
  //     y2: null,
  //     id: this.$vnode.key,
  //   }
  // },
  // watch: {
  //   isShow() {
  //     this.updateData()
  //     this.$emit('letter-tag--show', this.$data)
  //   },
  // },
  // computed: {
  //   styles() {
  //     return [{ show: this.isShow }, { hide: this.isKilled }]
  //   },
  // },
  // methods: {
  //   updateData() {
  //     let rect = this.$el.getBoundingClientRect()
  //     this.x1 = Math.ceil(rect.left)
  //     this.y1 = Math.ceil(rect.top)
  //     this.x2 = Math.ceil(rect.left + this.$el.clientWidth)
  //     this.y2 = Math.ceil(rect.top + this.$el.clientHeight)
  //   },
  // },
// }
</script>

<style lang="scss">
.letter-tag {
  font-size: 1em;
  display: inline-block;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }
}
</style>
