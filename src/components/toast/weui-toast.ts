import { Component, Input } from 'angular2/core';

@Component({
    selector: 'weui-toast',
    template: `
        <div class="weui_mask_transparent"></div>
        <div class="weui_toast">
            <i class="weui_icon_toast"></i>
            <p class="weui_toast_content">{{content}}</p>
        </div>
    `
})
export class WeuiToastComponent {
    @Input()
    content: string;
}
