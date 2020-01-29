<template>
    <div class="p-culture">
        <div class="p-bg p-bg__1" v-parallax=".4"><!-- --></div>
        <div class="p-bg p-bg__2" v-parallax=".3"><!-- --></div>
        <div class="p-bg p-bg__3" v-parallax=".6"><!-- --></div>
        <div class="p-bg p-bg__4" v-parallax=".4"><!-- --></div>
        <div class="container" v-resize:debounce="isResize">
            <div class="row justify-content-between no-gutters align-items-start">
                <div class="p-culture-content col col-12 col-md-8 col-xl-9">
                    <div class="p-culture-title">{{ this.culture.title }}</div>
                    <div class="p-culture-text" v-html="this.culture.description"></div>
                    <div v-if="isMobile" class="p-accordion">
                        <div v-for="cultureItem in this.culture.blocks"
                             class="p-accordion-block"
                             :key="'accordion' + cultureItem.id">
                            <a href="javascript:void(0);"
                               class="btn btn-accordion"
                               v-b-toggle="'collapse' + cultureItem.id" >
                                <span class="btn-accordion-shape"><!-- --></span>
                                {{ cultureItem.title }}
                            </a>
                            <b-collapse :id="'collapse' + cultureItem.id">
                                <div class="p-accordion-content" v-html="cultureItem.text"></div>
                            </b-collapse>
                        </div>
                    </div>
                    <div v-else>
                        <div :id="'block' + cultureItem.id"
                             class="p-culture-block"
                             v-for="cultureItem in this.culture.blocks"
                             :key="'block' + cultureItem.id">
                            <div class="p-culture-block-title">{{ cultureItem.title }}</div>
                            <div class="p-culture-block-text" v-html="cultureItem.text"></div>
                        </div>
                    </div>
                </div>
                <div class="p-culture-links-wrapper d-none d-md-block col col-md-4 col-xl-3">
                    <div v-if="!isMobile"
                         class="p-culture-links"
                         :class="{ 'is-fixed': menu.fixed }"
                         :style="{ 'margin-right': '-' + menu.margin + 'px', width: menu.width + 'px', top: menu.top + 'px' }"
                    >
                        <scrollactive :offset="blockTop">
                            <a class="scrollactive-item"
                               :href="'#block' + cultureItem.id"
                               v-for="cultureItem in this.culture.blocks">{{ cultureItem.title }}</a>
                        </scrollactive>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import resize from 'vue-resize-directive';

	export default {
        metaInfo: {
            title: 'Культура.'
        },
        data() {
            return {
                culture: {
                    title: 'Культура',
                    description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p>',
                    blocks: [
                        {
                            id: 1,
                            title: 'Заголовок 1',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><ul><li>List item</li><li>List item</li><li>List item</li></ul><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><ul><li>List item</li><li>List item</li><li>List item</li></ul><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                        {
                            id: 2,
                            title: 'Заголовок 2',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                        {
                            id: 3,
                            title: 'Заголовок 3',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                        {
                            id: 4,
                            title: 'Заголовок 4',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                        {
                            id: 5,
                            title: 'Заголовок 5',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                        {
                            id: 6,
                            title: 'Заголовок 6',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                        {
                            id: 7,
                            title: 'Заголовок 7',
                            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec blandit orci, non condimentum quam. Integer blandit, dolor a tristique ornare, tellus purus tincidunt odio, sed lacinia nunc metus sit amet eros. Sed ut augue id metus venenatis auctor. Mauris porttitor faucibus sodales. Praesent sodales venenatis purus, vel eleifend quam placerat a. Pellentesque ligula ipsum, ultrices a dictum id, tempor in ante. Nunc tincidunt eget lorem ut fermentum. Sed purus dolor, molestie aliquam dapibus at, condimentum ac nunc. Morbi aliquam odio vitae sem convallis, nec vehicula diam posuere. Mauris nisl diam, maximus quis tempor ac, molestie vel elit. Ut vitae nulla a nunc ornare ornare non id tortor. Vestibulum nulla nibh, tincidunt et risus a, lacinia posuere elit.</p><p>Cras dapibus tincidunt orci, a posuere lorem vehicula nec. Sed eu justo id lorem condimentum sodales. Etiam in enim et tortor vestibulum elementum. Nam semper velit sed suscipit aliquet. Fusce vitae libero pretium, tempor tortor sed, dignissim dolor. Aenean sit amet ipsum enim. Nullam efficitur ipsum sed hendrerit convallis. Nunc vitae lacinia ante. Quisque eu enim ut magna auctor condimentum.</p><p>Nulla mollis in nunc id consectetur. Curabitur lacinia aliquam rutrum. Aenean condimentum lectus eget quam porttitor, ut tempor ex tincidunt. Aliquam sit amet nisi sit amet tortor suscipit volutpat. Donec vel ipsum nunc. Vivamus dignissim tellus sit amet velit tempus, vel facilisis magna semper. Cras auctor sed libero id euismod. Duis sit amet felis ipsum. Nullam dignissim iaculis orci vitae ullamcorper. Phasellus neque enim, tempor eu lorem a, posuere consequat ante. Fusce a fringilla mi. Aenean varius cursus est. In molestie, augue ac interdum ornare, dolor ex laoreet eros, eu porta lorem mi et risus. Cras placerat fermentum libero vitae eleifend. Etiam quis nulla vel eros vehicula suscipit eu at neque.</p><p>Phasellus euismod, tortor eget euismod ultricies, quam metus fringilla ligula, a cursus nunc eros in ante. In pretium risus augue, ac aliquam elit tincidunt ac. Sed lacinia elit non diam elementum molestie. Aenean egestas massa quis ante viverra, vel scelerisque felis eleifend. Morbi placerat arcu ipsum, et pretium nisl ultricies eget. Aliquam ac interdum risus, a varius velit. Nulla facilisis tincidunt erat eget laoreet. Proin lobortis, elit et tincidunt sagittis, libero ligula tempus diam, sed pretium augue erat non odio. In ut turpis ac enim condimentum rhoncus. Morbi imperdiet maximus purus, id efficitur tortor ornare a. Curabitur consectetur arcu velit, eu faucibus elit consectetur a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam odio lectus, rutrum ac eros dignissim, lobortis varius odio. Nullam sed varius purus.</p>'
                        },
                    ],
                },
                isMobile: false,
                isTablet: false,
                menu: {
                    fixed: false,
                    top: 0,
                    margin: 0,
                    width: 0,
                }
            }
        },
        directives: {
            resize,
        },
        computed: {
            blockTop() {
                return this.isTablet ? 20 : 50
            }
        },
        updated() {
            this.isResize();
        },
        mounted() {
            window.addEventListener('scroll', this.scrollBlockCulture);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scrollBlockCulture);
        },
        methods: {
            //пересчитываем размеры динамических блоков
            isResize() {
                //проверяем нужно ли включить адаптив
                const width = window.innerWidth;
                this.isMobile = width < 768;
                this.isTablet = width >= 768 && width <= 1200;
                //получаем контейнер
                const container = document.querySelector('.p-culture .container');
                //получаем боковые паддинги контейнера (чтобы не учитывать их)
                const paddingContainer = parseFloat(window.getComputedStyle(container).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(container).getPropertyValue('padding-right'));
                //получаем отрицательный отступ меню (равен 1/2 ширины контейнера без padding)
                this.menu.margin = (container.offsetWidth - paddingContainer) / 2;
                //устанавливаем ширину блока меню
                this.menu.width = container.querySelector('.p-culture-links-wrapper').offsetWidth;
            },
            //фиксированный правый блок
            scrollBlockCulture() {
                //высота header
                const elementHeader = window.innerWidth >= 1200 ? document.querySelector('.p-navigation') : document.querySelector('.p-subnavigation');
                const heightHeader = parseFloat(window.getComputedStyle(elementHeader).getPropertyValue('height'));
                //отступ от верхнего края окна
                const menuTopMargin = heightHeader + 30;
                //находим блок контейнера
                const container = document.querySelector('.p-culture .container');
                //проверяем наличие контейнера на странице
                if(container) {
                    //получаем координаты блока контейнера
                    const coords = container.getBoundingClientRect().top;
                    //проверяем отступ от верха окна и фиксировано ли меню
                    if(coords < menuTopMargin + 1 && !this.menu.fixed) {
                        //фиксируем меню
                        this.menu.fixed = true;
                        this.menu.top = menuTopMargin;
                    } else if(coords >= menuTopMargin + 1 && this.menu.fixed) {
                        this.menu.fixed = false;
                        this.menu.top = 0;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-culture {
        padding: 15.8rem 0 4.6rem;
        position: relative;
        color: $color-strong-text;
        overflow: hidden;
        line-height: 28px;
        background-color: #f9fafb;
        z-index: 1;

        .p-bg {
            position: absolute;
            top: -15vh;
            left: 0;
            width: 100%;
            height: calc(100% + 30vh);
            z-index: -1;
        }
        .p-bg__1 {
            top: -53vh;
            height: 0;
            padding-bottom: 35%;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDcyLjIyIDU2MC4xNiI+PHBhdGggZmlsbD0iI0YzRjZGNyIgZD0iTTczNi4xMSA1NjAuMTZjMzUxLjI1IDAgNjQ3LjEtMjM3LjIgNzM2LjExLTU2MC4xNkgwYzg5LjAxIDMyMi45NiAzODQuODYgNTYwLjE2IDczNi4xMSA1NjAuMTZ6Ii8+PC9zdmc+") 150% 0 no-repeat;
            background-size: 80% 87%;
        }
        .p-bg__2 {
            width: 145%;
            height: 0;
            padding-bottom: 145%;
            border-radius: 50%;
            background-color: #f3f6f7;
            top: 60vh;
            right: 21%;
            left: auto;
        }
        .p-bg__3 {
            top: 50%;
            height: 0;
            padding-bottom: 55%;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTMgMTAwNyI+PHBhdGggZmlsbD0iI0VERjBGMyIgZD0iTTQ0OCAxMzBjLTM1LjkgMC02NS0yOS4xLTY1LTY1czI5LjEtNjUgNjUtNjUgNjUgMjkuMSA2NSA2NS0yOS4xIDY1LTY1IDY1ek0zMjAgMzA1Yy0zNS45IDAtNjUtMjkuMS02NS02NXMyOS4xLTY1IDY1LTY1IDY1IDI5LjEgNjUgNjUtMjkuMSA2NS02NSA2NXpNMTkzIDEzMGMtMzUuOSAwLTY1LTI5LjEtNjUtNjVzMjkuMS02NSA2NS02NSA2NSAyOS4xIDY1IDY1LTI5LjEgNjUtNjUgNjV6TTY1IDMwNWMtMzUuOSAwLTY1LTI5LjEtNjUtNjVzMjkuMS02NSA2NS02NSA2NSAyOS4xIDY1IDY1LTI5LjEgNjUtNjUgNjV6bTAgMjIxYzM1LjkgMCA2NSAyOS4xIDY1IDY1cy0yOS4xIDY1LTY1IDY1LTY1LTI5LjEtNjUtNjUgMjkuMS02NSA2NS02NXptMCAzNTFjMzUuOSAwIDY1IDI5LjEgNjUgNjVzLTI5LjEgNjUtNjUgNjUtNjUtMjkuMS02NS02NSAyOS4xLTY1IDY1LTY1em0xMjgtMTc2YzM1LjkgMCA2NSAyOS4xIDY1IDY1cy0yOS4xIDY1LTY1IDY1LTY1LTI5LjEtNjUtNjUgMjkuMS02NSA2NS02NXptMC0yMjFjLTM1LjkgMC02NS0yOS4xLTY1LTY1czI5LjEtNjUgNjUtNjUgNjUgMjkuMSA2NSA2NS0yOS4xIDY1LTY1IDY1em0xMjcgNDZjMzUuOSAwIDY1IDI5LjEgNjUgNjVzLTI5LjEgNjUtNjUgNjUtNjUtMjkuMS02NS02NSAyOS4xLTY1IDY1LTY1em0xMjggMTc1YzM1LjkgMCA2NSAyOS4xIDY1IDY1cy0yOS4xIDY1LTY1IDY1LTY1LTI5LjEtNjUtNjUgMjkuMS02NSA2NS02NXptMC0yMjFjLTM1LjkgMC02NS0yOS4xLTY1LTY1czI5LjEtNjUgNjUtNjUgNjUgMjkuMSA2NSA2NS0yOS4xIDY1LTY1IDY1eiIvPjwvc3ZnPg==") 96.5% 50% no-repeat;
            background-size: 27% 97%;
        }
        .p-bg__4 {
            top: 75%;
            height: 0;
            padding-bottom: 65%;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNTcgOTUzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTc0IDMxN2gxMjRsLTYyIDEwNy02Mi0xMDd6bTMzLjY5IDE5LjU0TDIzNiAzODUuNGwyOC4zMS00OC44NmgtNTYuNjJ6TTE5MCAwbDYyIDEwN0gxMjhMMTkwIDB6bTAgMzguNmwtMjguMzEgNDguODZoNTYuNjNMMTkwIDM4LjZ6TTIyOCA5NTNsLTEwMi02NS41TDIyOCA4MjJ2MTMxem0tMTkuNC05NS4zN2wtNDYuNTEgMjkuODcgNDYuNTEgMjkuODZ2LTU5Ljczek02MiA0NzNsNjIgMTA3SDBsNjItMTA3em0wIDM4LjZsLTI4LjMxIDQ4Ljg2aDU2LjYzTDYyIDUxMS42ek0yNTUgNjc1VjU0NGwxMDIgNjUuNUwyNTUgNjc1em0xOS40LTM1LjY0bDQ2LjUtMjkuODYtNDYuNS0yOS44N3Y1OS43M3oiLz48L3N2Zz4=") 20px 50% no-repeat;
            background-size: 19% 80%;
        }
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -60px;
            width: 100%;
            height: 350px;
            background-color: #edf0f3;
            transform: skewY(-2deg);
            z-index: 1;
        }
        .container {
            max-width: 1100px;
            position: relative;
            z-index: 2;
        }
        & &-content.col {
            padding-left: 43px;
            padding-right: 60px;
        }
    }
    .p-culture-title {
        font-size: 50px;
        line-height: 50px;
        font-family: $font-family-alternative;
        color: $color-strong-text;
        margin-bottom: 68px;
        font-weight: 500;
    }
    .p-culture-block {
        padding-top: 10.5%;

        .p-culture-block-title {
            font-size: 30px;
            line-height: 30px;
            color: $color-general;
            font-family: $font-family-alternative;
            font-weight: 500;
            margin-bottom: 32px;
        }
    }
    .p-culture-links {
        right: 50%;
        position: absolute;
        border-left: 1px solid #e5eaee;
        padding: 18px 11px 18px 45px;

        &:not(.is-fixed) {
            width: 100% !important;
            right: 0 !important;
            margin-right: 0 !important;
        }
        &.is-fixed {
            position: fixed;
            top: 30px;
            margin-right: -535px;
        }
        a {
            display: block;
            font-size: 15px;
            line-height: 15px;
            font-weight: 500;
            font-family: $font-family-alternative;
            text-decoration: none;
            color: $color-strong-text;
            transition: color 300ms;
            margin-bottom: 16.6%;

            &:hover,
            &.is-active {
                color: $color-general;
            }
            &:last-child {
                margin-bottom: 0 !important;
            }
        }
    }
    .p-accordion {
        margin: 42px 0 20px;
    }
    .p-accordion-block {
        background-color: #ffffff;
        margin-bottom: -1px;
        border: 1px solid #e5eaee;
    }
    .p-accordion-content {
        padding: 0 24px 30px 14px;
    }
    .btn-accordion {
        position: relative;
        width: 100%;
        text-align: left;
        margin: 0;
        padding: 26px 14px;
        font-size: 16px;
        line-height: 16px;
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
            right: 20px;
            width: 1px;
            height: 1px;

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 12px;
                height: 1px;
                margin: 0 -6px;
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
        .p-culture {
            padding: 90px 0 40px;
            font-size: 14px;
            line-height: 22px;
            background: #f9fafb;

            .p-bg,
            &:before,
            &:after {
                display: none;
            }
            & &-content.col {
                padding-left: 0;
                padding-right: 0;
            }
        }
        .p-culture-title {
            font-size: 30px;
            line-height: 40px;
            font-weight: 400;
            margin-bottom: 15px;
        }
        .p-culture-text {
            letter-spacing: 0.5px;
        }
    }

    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-culture {
            padding: 8.8rem 0 2.8rem;
            font-size: 14px;
            line-height: 26px;

            .p-bg__1 {
                background-position: -150% 0;
                background-size: 110% 95%;
                top: -63vh;
                padding-bottom: 44%;
            }
            .p-bg__2 {
                width: 245%;
                padding-bottom: 245%;
                top: 246px;
                right: 19%;
            }
            .p-bg__3 {
                background-position: 96.5% 50%;
                background-size: 35% 95%;
                padding-bottom: 75%;
            }
            .p-bg__4 {
                background-position: 20px 50%;
                background-size: 35% 95%;
                padding-bottom: 100%;
            }
            &:after {
                height: 369px;
                transform: skewY(-4deg);
            }
            & &-content.col {
                padding-left: 4.2%;
                padding-right: 8%;
            }
        }
        .p-culture-title {
            font-size: 35px;
            line-height: 35px;
            margin-bottom: 11.1%;
        }
        .p-culture-block {
            padding-top: 13%;

            .p-culture-block-title {
                font-size: 26px;
                line-height: 26px;
                margin-bottom: 6.4%;
            }
        }
        .p-culture-links {
            padding-top: 0;
            padding-bottom: 0;

            a {
                margin-bottom: 12.2%;
            }

        }
    }

</style>

<style lang="scss">

    @import "../../assets/scss/variables.scss";

    .p-culture-text {
        p {
            margin-bottom: 14px;

            &:last-child {
                margin-bottom: 0 !important;
            }
        }
    }
    .p-culture-block-text {
        p {
            margin-bottom: 14px;

            &:last-child {
                margin-bottom: 0 !important;
            }
            b {
                font-weight: 600;
            }
            & + ul {
                margin-top: -6px;
            }
        }
        ul {
            list-style: none;
            padding: 0 !important;
            margin: 16px 0 36px;

            li {
                padding-left: 30px;
                position: relative;
                margin-bottom: 14px;

                &:last-child {
                    margin-bottom: 0 !important;
                }
                &:before {
                    content: '\2022';
                    position: absolute;
                    top: 0;
                    left: 11px;
                }
            }
        }
    }
    .p-accordion-content {
        p {
            margin-bottom: 22px;

            &:last-child {
                margin-bottom: 0 !important;
            }
            b {
                font-weight: 600;
            }
            & + ul {
                margin-top: -12px;
            }
        }
        ul {
            list-style: none;
            padding: 0 !important;
            margin: 22px 0 21px;

            li {
                padding-left: 18px;
                position: relative;
                margin-bottom: 8px;

                &:last-child {
                    margin-bottom: 0 !important;
                }
                &:before {
                    content: '\2022';
                    position: absolute;
                    top: 0;
                    left: 6px;
                    font-size: 12px;
                }
            }
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-culture-text p {
            margin-bottom: 8px;
        }
    }

    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-culture-block-text {
            p {
                margin-bottom: 24px;
                & + ul {
                    margin-top: -13px;
                }
            }
            ul {
                margin: 24px 0 24px;

                li {
                    padding-left: 18px;

                    &:before {
                        left: 5px;
                    }
                }
            }
        }
    }
</style>
