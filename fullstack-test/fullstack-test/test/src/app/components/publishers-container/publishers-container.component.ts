import { Component, OnInit } from '@angular/core';
import { PublisherCardComponent } from './publisher-card/publisher-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Publisher } from '../../types';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-publishers-container',
    standalone: true,
    imports: [PublisherCardComponent, CommonModule, FormsModule],
    templateUrl: './publishers-container.component.html',
    styleUrl: './publishers-container.component.css',
})
export class PublishersContainerComponent implements OnInit {
    constructor(private httpService: HttpService) {}

    publishers: Array<Publisher> = [];
    newPublisherName: string = '';

    ngOnInit(): void {
        this.getPublishers();
    }

    getPublishers() {
        this.httpService.getPublishers().subscribe(
            (data: Publisher[]) => {
                this.publishers = data;
            },
            (error) => {
                console.error('Error fetching publishers:', error);
            }
        );
    }

    addPublisher() {
        if (this.newPublisherName.trim()) {
            this.httpService.addPublisher(this.newPublisherName).subscribe(
                (newPublisher: Publisher) => {
                    this.publishers.unshift(newPublisher);
                    this.newPublisherName = '';
                },
                (error) => {
                    console.error('Error adding publisher:', error);
                    alert(error.error.errorMessage || 'Failed to add publisher');
                }
            );
        }
    }
}