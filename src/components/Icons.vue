<script>
export default {
	props: {
		name: { type: String, required: true },
		className: { type: String, default: '' }
	}
}
</script>

<template>
	<i :class="`icon-${name} ${className}`" aria-hidden="true"></i>
</template>
