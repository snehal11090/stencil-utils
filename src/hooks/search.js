import BaseHooks from './base';
import $ from 'jquery';

export default class extends BaseHooks {

    /**
     * @Constructor
     */
    constructor() {
        // call parent
        super();

        this.quickSearch();
    }

    quickSearch() {
        this.$body.on('input', '[data-search-quick]', (event) => {
            this.emit('search-quick', event);
        });
    }
}
