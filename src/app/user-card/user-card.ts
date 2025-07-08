import { Component, Input } from "@angular/core";

@Component
({
    selector:    "app-user-card",
    imports:     [],
    templateUrl: "./user-card.html",
})
export class UserCard
{
    @Input() user: any;
}
