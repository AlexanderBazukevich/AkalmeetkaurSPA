import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Section } from 'src/app/interfaces';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styles: [`
    @media screen and (min-width: 320px) and (max-width: 767px) {
      :host-context(.hide-image) .section__image {
        display: none;
      }
    }
  `]
})
export class SectionComponent {

  @Input() sectionData: Section;

  constructor(private sanitizer: DomSanitizer) { }

  get sectionText(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.sectionData.text);
  }
}
