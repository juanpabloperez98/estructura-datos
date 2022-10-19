import { Injectable, Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import 'prismjs';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

declare var Prism: any;

@Injectable()
export class HighlightService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}