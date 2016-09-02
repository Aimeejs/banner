/*!
 * banner For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-09-02
 */

import App from 'app';
import template from 'banner.jade';

class banner extends App {

    constructor() {
        super();
        this.name = 'banner';
        this.template = template;
    }

    prerender(app) {
        this.bind({
            'click,touchend@.iclose': e => {
                e.preventDefault();
                e.stopPropagation();
                this.hide();
            }
        })
    }
}

export default banner;
