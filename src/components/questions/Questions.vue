<template>
    <div class="p-questions">
        <div class="p-container">
            <div class="p-questions-title">FAQ для кандидатов</div>
            <div class="p-questions-tabs">
                <div v-for="questionsItem in this.questions"
                     class="p-questions-block"
                     :key="'accordion' + questionsItem.id">
                    <a href="javascript:void(0);"
                       class="btn btn-questions"
                       v-b-toggle="'collapse' + questionsItem.id">
                        <span class="btn-accordion-shape"><!-- --></span>
                        <span v-html="questionsItem.title"><!-- --></span>
                    </a>
                    <b-collapse :id="'collapse' + questionsItem.id">
                        <div class="p-questions-content" v-html="questionsItem.text"></div>
                    </b-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

	export default {
        metaInfo: {
            title: 'FAQ.'
        },
        data() {
            return {
                questions: [
                    {
                        id: 1,
                        title: 'Question 1?',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris risus, malesuada sit amet mollis quis, porttitor nec arcu. Praesent malesuada lectus nibh, at sollicitudin dui mattis sit amet. Sed quis pellentesque nunc. Curabitur malesuada semper tortor, eget pretium ipsum maximus a. Cras tempus, elit ut mollis pharetra, dui nisi eleifend lorem, tincidunt volutpat est leo vel erat. Praesent volutpat imperdiet diam quis viverra. Phasellus viverra tellus quis tristique bibendum. Mauris fringilla facilisis quam vitae cursus. Nam accumsan ligula sit amet metus tincidunt, vitae viverra mauris euismod. Phasellus ac felis sed sem placerat ultrices. Donec tellus est, pellentesque nec turpis sit amet, ultrices mattis elit.</p><ul><li><a href="javascript:void(0);" target="_blank">Video link 1</a></li><li><a href="javascript:void(0);" target="_blank">Video link 2</a></li></ul><p>Vivamus ac lectus efficitur, venenatis felis sed, ornare erat. Mauris rutrum risus at convallis bibendum. Suspendisse potenti. Mauris eget orci eros. Nunc commodo vestibulum cursus. Praesent convallis nulla mi, nec aliquam sem ultricies eu. Phasellus eleifend velit vel pulvinar laoreet. Proin rutrum quam nec nulla vulputate eleifend. Etiam in sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed libero porttitor, tristique lorem a, tempor ipsum. Nunc laoreet lobortis felis non congue. Duis hendrerit feugiat consequat.</p>'
                    },
                    {
                        id: 2,
                        title: 'Question 2?',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris risus, malesuada sit amet mollis quis, porttitor nec arcu. Praesent malesuada lectus nibh, at sollicitudin dui mattis sit amet. Sed quis pellentesque nunc. Curabitur malesuada semper tortor, eget pretium ipsum maximus a. Cras tempus, elit ut mollis pharetra, dui nisi eleifend lorem, tincidunt volutpat est leo vel erat. Praesent volutpat imperdiet diam quis viverra. Phasellus viverra tellus quis tristique bibendum. Mauris fringilla facilisis quam vitae cursus. Nam accumsan ligula sit amet metus tincidunt, vitae viverra mauris euismod. Phasellus ac felis sed sem placerat ultrices. Donec tellus est, pellentesque nec turpis sit amet, ultrices mattis elit.</p><p>Vivamus ac lectus efficitur, venenatis felis sed, ornare erat. Mauris rutrum risus at convallis bibendum. Suspendisse potenti. Mauris eget orci eros. Nunc commodo vestibulum cursus. Praesent convallis nulla mi, nec aliquam sem ultricies eu. Phasellus eleifend velit vel pulvinar laoreet. Proin rutrum quam nec nulla vulputate eleifend. Etiam in sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed libero porttitor, tristique lorem a, tempor ipsum. Nunc laoreet lobortis felis non congue. Duis hendrerit feugiat consequat.</p>'
                    },
                    {
                        id: 3,
                        title: 'Question 3?',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris risus, malesuada sit amet mollis quis, porttitor nec arcu. Praesent malesuada lectus nibh, at sollicitudin dui mattis sit amet. Sed quis pellentesque nunc. Curabitur malesuada semper tortor, eget pretium ipsum maximus a. Cras tempus, elit ut mollis pharetra, dui nisi eleifend lorem, tincidunt volutpat est leo vel erat. Praesent volutpat imperdiet diam quis viverra. Phasellus viverra tellus quis tristique bibendum. Mauris fringilla facilisis quam vitae cursus. Nam accumsan ligula sit amet metus tincidunt, vitae viverra mauris euismod. Phasellus ac felis sed sem placerat ultrices. Donec tellus est, pellentesque nec turpis sit amet, ultrices mattis elit.</p><p>Vivamus ac lectus efficitur, venenatis felis sed, ornare erat. Mauris rutrum risus at convallis bibendum. Suspendisse potenti. Mauris eget orci eros. Nunc commodo vestibulum cursus. Praesent convallis nulla mi, nec aliquam sem ultricies eu. Phasellus eleifend velit vel pulvinar laoreet. Proin rutrum quam nec nulla vulputate eleifend. Etiam in sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed libero porttitor, tristique lorem a, tempor ipsum. Nunc laoreet lobortis felis non congue. Duis hendrerit feugiat consequat.</p>'
                    },
                    {
                        id: 4,
                        title: 'Question 4?',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris risus, malesuada sit amet mollis quis, porttitor nec arcu. Praesent malesuada lectus nibh, at sollicitudin dui mattis sit amet. Sed quis pellentesque nunc. Curabitur malesuada semper tortor, eget pretium ipsum maximus a. Cras tempus, elit ut mollis pharetra, dui nisi eleifend lorem, tincidunt volutpat est leo vel erat. Praesent volutpat imperdiet diam quis viverra. Phasellus viverra tellus quis tristique bibendum. Mauris fringilla facilisis quam vitae cursus. Nam accumsan ligula sit amet metus tincidunt, vitae viverra mauris euismod. Phasellus ac felis sed sem placerat ultrices. Donec tellus est, pellentesque nec turpis sit amet, ultrices mattis elit.</p><p>Vivamus ac lectus efficitur, venenatis felis sed, ornare erat. Mauris rutrum risus at convallis bibendum. Suspendisse potenti. Mauris eget orci eros. Nunc commodo vestibulum cursus. Praesent convallis nulla mi, nec aliquam sem ultricies eu. Phasellus eleifend velit vel pulvinar laoreet. Proin rutrum quam nec nulla vulputate eleifend. Etiam in sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed libero porttitor, tristique lorem a, tempor ipsum. Nunc laoreet lobortis felis non congue. Duis hendrerit feugiat consequat.</p>'
                    },
                    {
                        id: 5,
                        title: 'Question 5?',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris risus, malesuada sit amet mollis quis, porttitor nec arcu. Praesent malesuada lectus nibh, at sollicitudin dui mattis sit amet. Sed quis pellentesque nunc. Curabitur malesuada semper tortor, eget pretium ipsum maximus a. Cras tempus, elit ut mollis pharetra, dui nisi eleifend lorem, tincidunt volutpat est leo vel erat. Praesent volutpat imperdiet diam quis viverra. Phasellus viverra tellus quis tristique bibendum. Mauris fringilla facilisis quam vitae cursus. Nam accumsan ligula sit amet metus tincidunt, vitae viverra mauris euismod. Phasellus ac felis sed sem placerat ultrices. Donec tellus est, pellentesque nec turpis sit amet, ultrices mattis elit.</p><p>Vivamus ac lectus efficitur, venenatis felis sed, ornare erat. Mauris rutrum risus at convallis bibendum. Suspendisse potenti. Mauris eget orci eros. Nunc commodo vestibulum cursus. Praesent convallis nulla mi, nec aliquam sem ultricies eu. Phasellus eleifend velit vel pulvinar laoreet. Proin rutrum quam nec nulla vulputate eleifend. Etiam in sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed libero porttitor, tristique lorem a, tempor ipsum. Nunc laoreet lobortis felis non congue. Duis hendrerit feugiat consequat.</p>'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-questions {
        padding: 15.5rem 0 4.4rem;
        background-color: #f9fafb;
    }
    .p-questions-title {
        font-size: 50px;
        line-height: 60px;
        font-weight: 500;
        font-family: $font-family-alternative;
        color: $color-strong-text;
        margin-bottom: 3.8rem;
    }
    .p-container {
        width: 88.5%;
        max-width: 830px;
        margin: 0 auto;
    }
    .p-questions-tabs {
        font-size: 16px;
        line-height: 27px;
        color: $color-strong-text;
    }
    .p-questions-block {
        background-color: #ffffff;
        margin-bottom: -1px;
        border: 1px solid #e5eaee;
    }
    .p-questions-content {
        padding: 0 35px 46px;
    }
    .btn-questions {
        position: relative;
        width: 100%;
        text-align: left;
        margin: 0;
        padding: 29px 45px 30px 35px;
        font-size: 22px;
        line-height: 28px;
        font-weight: 500;
        color: $color-general;
        font-family: $font-family-alternative;
        box-shadow: none !important;
        transition: color 300ms;
        border: none;
        border-radius: 0;
        z-index: 1;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: -1px;
            width: calc(100% + 2px);
            height: 0;
            background-color: #f9fafb;
            transition: height 300ms;
            z-index: -1;
        }
        .btn-accordion-shape {
            position: absolute;
            top: 50%;
            right: 28px;
            width: 1px;
            height: 1px;

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 16px;
                height: 1px;
                margin: 0 -10px;
                background-color: #b6b7bb;
                transition: transform 300ms;
            }
        }
        &.collapsed {
            color: $color-strong-text;

            &:before {
                height: 100%;
            }
            .btn-accordion-shape {
                &:after {
                    transform: rotate(90deg);
                }
            }
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-questions {
            padding: rem-calc(90) 0 rem-calc(63);
        }
        .p-container {
            width: 90.5%;
        }
        .p-questions-title {
            font-size: 30px;
            line-height: 40px;
            font-weight: 300;
            margin-bottom: rem-calc(40);
        }
        .p-questions-tabs {
            font-size: 14px;
            line-height: 22px;

            .btn-questions {
                font-size: 16px;
                line-height: 23px;
                padding: 21px 36px 22px 14px;

                &:after {
                    right: 0.75rem;
                }
            }
            .p-questions-content {
                padding: 1px 13px 30px;
            }
        }

        .btn-questions {

            .btn-accordion-shape {
                right: 20px;

                &:before,
                &:after {
                    width: 12px;
                    margin: 0 -6px;
                }
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-questions {
            padding: 5.9rem 0 2.5rem;
        }
        .p-questions-title {
            font-size: 35px;
            line-height: 45px;
            margin-bottom: 2.65rem;
        }
        .p-questions-tabs {
            font-size: 15px;
            line-height: 26px;
            color: #3f3f3f;

            .btn-questions {
                font-size: 20px;
                line-height: 28px;
                padding: 29px 60px 29px 23px;
            }
            .p-questions-content {
                padding: 0 23px 26px;
            }
        }
    }

</style>

<style lang="scss">

    @import "../../assets/scss/variables.scss";

    .p-questions-content {

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                position: relative;
                padding-left: 1.8rem;
                margin-bottom: 0.95rem;

                &:last-child {
                    margin-bottom: 0 !important;
                }
                &:before {
                    content: '\2022';
                    position: absolute;
                    top: -1px;
                    left: 0.7rem;
                }
            }
        }
        p {
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: 0 !important;
            }
        }
        a:not(.btn) {
            text-decoration: underline;
            color: $color-general;
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-questions-content {

            p {
                margin-bottom: 0.55rem;
            }
            ul li {
                padding-left: 1.15rem;
                margin-bottom: 0.5rem;

                &:before {
                    top: -1px;
                    left: 0.35rem;
                }
            }

        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-questions-content {

            p {
                margin-bottom: 0.85rem;
            }
            ul li {
                position: relative;
                padding-left: 2.5rem;
                margin-bottom: 0.95rem;

                &:before {
                    content: '\2022';
                    position: absolute;
                    top: 0px;
                    left: 1.4rem;
                    font-size: 16px;
                }
            }
        }
    }

</style>
