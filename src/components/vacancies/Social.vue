<template>
    <div class="p-share">
        <button class="btn btn-success p-share-btn__toggle p-btn-shadow"
                :class="{ 'opened': opened }"
                @click="open"
        ></button>
        <div class="p-share-container"
             :class="{opened: opened}"
             :style="'transform: rotate(' + rotate + 'deg)'"
        >
            <slot name="social-item"></slot>
        </div>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                opened: false
            }
        },
        props: {
            distance: {
                type: Number,
                default: 100
            },
            position: {
                type: String,
                default: 'left'
            },
            scale: {
                type: Number,
                default: 1
            },
            rotate: {
                type: Number,
                default: 0
            }
        },
        methods: {
            //вычисление угла поворота елемента соц. сетей
            calcRotation: function (index) {
                if (this.$slots['social-item'].length === 1) {
                    return 90;
                }
                return (180 / (this.$slots['social-item'].length - 1)) * index;
            },
            //переключение выпадения соц. сетей
            open: function () {
                this.opened = !this.opened;

                this.$slots['social-item'].forEach((item, index) => {
                    let angle = this.calcRotation(index) * Math.PI / 180;
                    angle *= this.position === 'left' ? -1 : 1;
                    const x = (- Math.sin(angle) * this.distance).toFixed(4),
                        y = (this.distance * Math.cos(angle).toFixed(4));
                    item.elm.style.transform = `translate(${x}px, ${y}px) scale(${this.scale}) rotate(${this.rotate * -1}deg)`;
                    if (!this.opened) {
                        item.elm.style.transform = `translate(0,0) scale(0) rotate(${this.rotate * -1}deg)`;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-share {
        z-index: 1000;
        position: relative;
        margin-left: 0.7rem;
    }
    .p-share-btn__toggle {
        position: relative;
        width: 54px;
        height: 0;
        padding: 0 0 54px 0;
        border-radius: 50%;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE1IDE0LjE1YzEuNjEgMCAyLjkxIDEuMzEgMi45MSAyLjkzUzE2LjYgMjAuMDEgMTUgMjAuMDFhMi45MTcgMi45MTcgMCAwIDEtMi44My0zLjU5bC03LjEyLTQuMTdjLS41NC41LTEuMjUuODEtMi4wNC44MWEzLjAxIDMuMDEgMCAwIDEgMC02LjAyYy43OSAwIDEuNS4zMSAyLjA0LjgxbDcuMDUtNC4xM2MtLjA2LS4yMy0uMS0uNDctLjEtLjcxQzEyIDEuMzUgMTMuMzUgMCAxNSAwYTMuMDEgMy4wMSAwIDAgMSAwIDYuMDJjLS43OSAwLTEuNS0uMzEtMi4wNC0uODFMNS45MSA5LjM0Yy4wNi4yMy4wOS40Ni4wOS43MXMtLjA0LjQ4LS4wOS43bDcuMTMgNC4xN2MuNTItLjQ4IDEuMi0uNzcgMS45Ni0uNzciLz48L3N2Zz4=');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 35% 35%;
        border: none;
        z-index: 5;

        &.opened {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMCI+PHBhdGggc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGQ9Ik0xNy40MTIgMS44NzFMMS45NzUgMTcuMzA3TTIuMTg0IDIuMDc5bDE1LjAyIDE1LjAyIi8+PC9zdmc+');
        }
    }
    .p-share-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .p-share-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: rem-calc(52);
        height: 0;
        padding-bottom: rem-calc(52);
        margin: rem-calc(-26);
        transition: .3s cubic-bezier(0, 0, .2, 1);
        cursor: pointer;
        transform: translate(0, 0) scale(0);
        color: #ffffff;
        overflow: hidden;
        background-color: $color-general;
        border-radius: 50%;
        box-shadow: 0 0 0 hsla(0, 0%, 0%, 0.5);
        z-index: -1;

        &:hover {
            box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);
        }
        &.p-share-btn__empty {
            background: none;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
        a {
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            font-size: 1.35rem;
            justify-content: center;
            align-items: center;

            [class^="icon-"]:before,
            [class*=" icon-"]:before {
                width: auto;
                margin: 0;
                line-height: 1.3rem;
            }
        }
    }


    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //custom
    @media (max-width: 1350px) and (min-width: 1200px){
        .p-alternative-img {
            right: -6rem;
        }
    }
    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-share-btn__toggle {
            width: 50px;
            padding: 0 0 50px 0;
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
    }

</style>

<style lang="scss">
    .p-share-btn {
        .button-social {
            &:hover {
                opacity: 1 !important;
            }
            &.viber__design__flat {
                background-color: #ff4343;
            }
            [class^="icon-"]:before,
            [class*=" icon-"]:before {
                width: auto;
                margin: 0;
                line-height: 1.3rem;
            }
        }
    }
</style>
