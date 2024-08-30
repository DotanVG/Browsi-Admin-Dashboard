import { Component, Input, OnInit } from '@angular/core';
import { DomainCardComponent } from "../domain-card/domain-card.component";
import { CommonModule } from "@angular/common";
import { Publisher, Domain } from "../../../types";
import { HttpService } from "../../../http.service";

@Component({
  selector: 'app-publisher-card',
  standalone: true,
  imports: [
    DomainCardComponent,
    CommonModule
  ],
  templateUrl: './publisher-card.component.html',
  styleUrl: './publisher-card.component.css'
})
export class PublisherCardComponent implements OnInit {
  @Input() publisher!: Publisher;
  domains: Domain[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.httpService.getDomains(this.publisher.publisher).subscribe(
      (domains: Domain[]) => {
        this.domains = domains;
      },
      (error) => {
        console.error('Error fetching domains:', error);
      }
    );
  }
}