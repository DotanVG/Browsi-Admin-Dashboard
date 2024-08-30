import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Domain } from "../../../types";

@Component({
    selector: 'app-domain-card',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="domain-card-container">
            <h3>{{domain.url}}</h3>
            <p>Desktop Ads: {{domain.desktopAds}}</p>
            <p>Mobile Ads: {{domain.mobileAds}}</p>
        </div>
    `,
    styleUrl: './domain-card.component.css'
})
export class DomainCardComponent {
    @Input() domain!: Domain;
}