import { Component, OnInit } from '@angular/core';
import { PublisherCardComponent } from './publisher-card/publisher-card.component';
import { CommonModule } from '@angular/common';
import { Publisher } from '../../types';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-publishers-container',
    standalone: true,
    imports: [PublisherCardComponent, CommonModule],
    templateUrl: './publishers-container.component.html',
    styleUrl: './publishers-container.component.css',
})
export class PublishersContainerComponent implements OnInit {
    constructor(private httpService: HttpService) {}

    publishers: Array<Publisher> = [];

    ngOnInit(): void {
    }

    addPublisher() {

    }
}
