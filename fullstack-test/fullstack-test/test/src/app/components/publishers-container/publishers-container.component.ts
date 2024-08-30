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
    publishers: Array<Publisher> = [];

    constructor(private httpService: HttpService) {}

    ngOnInit(): void {
        this.loadPublishers();
    }

    loadPublishers() {
        this.httpService.getPublishers().subscribe(
            (data) => {
                this.publishers = data;
            },
            (error) => {
                console.error('Error fetching publishers:', error);
            }
        );
    }

    addPublisher() {
        // I will be implementing this in a later task
    }
}