import { Component } from '@angular/core';
import { NgCrudAioComponent } from 'ng-crud-kit';

@Component({
  selector: 'app-aio',
  standalone: true,
  imports: [NgCrudAioComponent],
  templateUrl: './aio.html',
  styleUrl: './aio.scss'
})
export class Aio {
  public tableData = [
        {
            "id": 2,
            "character": "Dr Who",
            "production": "Dr Who and the Daleks",
            "director": "Roger Rabbit",
            "company": "RTE Jr",
            "year": 2022,
            "created_at": "2023-03-05T20:30:28.000000Z",
            "updated_at": "2023-03-05T20:30:28.000000Z"
        },
        {
            "id": 3,
            "character": "Nick Marson",
            "production": "You Are Here",
            "director": "Joshua Brown",
            "company": "ITW Senior Musical Theatre",
            "year": 2022,
            "created_at": "2023-03-05T20:31:01.000000Z",
            "updated_at": "2023-03-05T20:31:01.000000Z"
        },
        {
            "id": 4,
            "character": "Child Chorus",
            "production": "Tosca",
            "director": null,
            "company": "Bord Gais Energy Theatre",
            "year": 2022,
            "created_at": "2023-03-06T12:10:11.000000Z",
            "updated_at": "2023-03-06T12:10:11.000000Z"
        },
        {
            "id": 5,
            "character": "Altar boy\/ Puppet",
            "production": "The Sound of Music",
            "director": "Tony Finnegan",
            "company": "National Concert Hall",
            "year": 2022,
            "created_at": "2023-03-06T12:11:14.000000Z",
            "updated_at": "2023-03-06T12:11:14.000000Z"
        },
        {
            "id": 10,
            "character": "Fashion Model",
            "production": "Winter and Summer clothing line shoots for retail website, social media campaigns, store boards",
            "director": null,
            "company": "Trotters Childrenswear Ltd",
            "year": 2019,
            "created_at": "2023-03-06T18:34:13.000000Z",
            "updated_at": "2023-03-06T18:34:13.000000Z"
        },
        {
            "id": 11,
            "character": "Ruth Brennan",
            "production": "Fair city",
            "director": null,
            "company": "RTE",
            "year": 2011,
            "created_at": "2023-03-13T20:21:03.000000Z",
            "updated_at": "2023-03-13T20:21:03.000000Z"
        },
        {
            "id": 12,
            "character": "Little boy on street",
            "production": "AlB Christmas Ad",
            "director": "Dylan Davies",
            "company": null,
            "year": 2014,
            "created_at": "2023-03-14T19:26:24.000000Z",
            "updated_at": "2023-03-14T19:26:24.000000Z"
        },
        {
            "id": 13,
            "character": "Child model",
            "production": "Barnardos\/Aldi photoshoot",
            "director": null,
            "company": null,
            "year": 2022,
            "created_at": "2023-03-14T19:52:27.000000Z",
            "updated_at": "2023-03-14T19:52:27.000000Z"
        },
        {
            "id": 14,
            "character": "Daughter",
            "production": "Amazon Holiday Commercial",
            "director": "Zak Emerson",
            "company": "Butter Productions",
            "year": 2022,
            "created_at": "2023-03-14T19:53:12.000000Z",
            "updated_at": "2023-03-14T19:53:12.000000Z"
        },
        {
            "id": 15,
            "character": "Giggling Girl",
            "production": "The Doll Factory",
            "director": null,
            "company": "Movie Extras.ie",
            "year": 2023,
            "created_at": "2023-03-15T13:37:59.000000Z",
            "updated_at": "2023-03-15T13:37:59.000000Z"
        },
        {
            "id": 16,
            "character": "Villager girl",
            "production": "Epic",
            "director": null,
            "company": "Movie Extras.ie \/ Disney\/ABC",
            "year": 2021,
            "created_at": "2023-03-15T13:39:36.000000Z",
            "updated_at": "2023-03-15T13:39:36.000000Z"
        },
        {
            "id": 17,
            "character": "Extras\/Stand-in",
            "production": "Moonhaven",
            "director": null,
            "company": "Movie Extras.ie",
            "year": 2021,
            "created_at": "2023-03-15T13:41:27.000000Z",
            "updated_at": "2023-03-15T13:41:27.000000Z"
        },
        {
            "id": 18,
            "character": "Miss Miller",
            "production": "Goodnight Mr Tom",
            "director": "Liam Corrigan",
            "company": "Mill Theatre Dublin",
            "year": 2022,
            "created_at": "2023-03-15T16:54:55.000000Z",
            "updated_at": "2023-03-15T16:54:55.000000Z"
        },
        {
            "id": 19,
            "character": "Nurse",
            "production": "Goodnight Mr Tom",
            "director": "Liam Corrigan",
            "company": "Mill Theatre Dundrum",
            "year": 2022,
            "created_at": "2023-03-15T16:56:07.000000Z",
            "updated_at": "2023-03-15T16:56:07.000000Z"
        },
        {
            "id": 20,
            "character": "Peter Rabbit",
            "production": "Peter Rabbit",
            "director": "Ms. Mc Coy",
            "company": "MS. Mc Coy drama club",
            "year": 2018,
            "created_at": "2023-03-15T16:58:01.000000Z",
            "updated_at": "2023-03-15T16:58:01.000000Z"
        },
        {
            "id": 21,
            "character": "Ensemble",
            "production": "Ali in wonderland",
            "director": "Miss Ali Stage School",
            "company": "Olympia Theatre",
            "year": 2018,
            "created_at": "2023-03-15T17:00:52.000000Z",
            "updated_at": "2023-03-15T17:00:52.000000Z"
        },
        {
            "id": 22,
            "character": "Speaking role as Sparkles",
            "production": "Apps of Life",
            "director": "Miss Ali",
            "company": "Olympia Theatre",
            "year": 2017,
            "created_at": "2023-03-15T17:20:38.000000Z",
            "updated_at": "2023-03-15T17:20:38.000000Z"
        },
        {
            "id": 28,
            "character": "Georgie",
            "production": "Goodnight Mr Tom",
            "director": "Liam Corrigan",
            "company": "Glencullen Dundrum MDS",
            "year": 2022,
            "created_at": "2023-03-15T21:15:05.000000Z",
            "updated_at": "2023-03-15T21:15:05.000000Z"
        },
        {
            "id": 29,
            "character": "N\/A",
            "production": null,
            "director": null,
            "company": null,
            "year": null,
            "created_at": "2023-03-15T22:39:19.000000Z",
            "updated_at": "2023-03-15T22:39:19.000000Z"
        },
        {
            "id": 30,
            "character": "Child Chorus",
            "production": "Tosca",
            "director": "Micheal Gieleta",
            "company": "INO production in the Bord Gais Energy Theatre",
            "year": 2022,
            "created_at": "2023-03-16T18:13:09.000000Z",
            "updated_at": "2023-03-16T18:13:09.000000Z"
        },
        {
            "id": 31,
            "character": "Carrie",
            "production": "Goodnight Mister Tom",
            "director": "Liam Corrigan",
            "company": "Glencullen Dundrum MDS production in the Mill Theatre, Dundrum",
            "year": 2022,
            "created_at": "2023-03-16T18:15:07.000000Z",
            "updated_at": "2023-03-16T18:15:07.000000Z"
        },
        {
            "id": 32,
            "character": "Elsa",
            "production": "Into the Unknown",
            "director": "Bernie Delaney",
            "company": "Bernie Delaney School of Speech & Drama",
            "year": 2023,
            "created_at": "2023-03-16T19:14:15.000000Z",
            "updated_at": "2023-03-16T19:14:15.000000Z"
        },
        {
            "id": 33,
            "character": "Group Dance & Singing",
            "production": "Rise Up",
            "director": "Claire Tighe",
            "company": "Theatreworx",
            "year": 2022,
            "created_at": "2023-03-16T19:18:13.000000Z",
            "updated_at": "2023-03-16T19:18:13.000000Z"
        },
        {
            "id": 34,
            "character": "Chorus",
            "production": "Tosca",
            "director": "INO",
            "company": "Bord Gais Theatre",
            "year": 2022,
            "created_at": "2023-03-17T19:09:48.000000Z",
            "updated_at": "2023-03-17T19:09:48.000000Z"
        },
        {
            "id": 35,
            "character": "Featured Role",
            "production": "Climate Change Ad",
            "director": null,
            "company": "RTE",
            "year": 2019,
            "created_at": "2023-03-17T19:10:59.000000Z",
            "updated_at": "2023-03-17T19:10:59.000000Z"
        },
        {
            "id": 39,
            "character": "Choir",
            "production": "Hole In The Ground",
            "director": null,
            "company": "Feature Film",
            "year": 2017,
            "created_at": "2023-03-18T11:43:31.000000Z",
            "updated_at": "2023-03-18T11:43:31.000000Z"
        },
        {
            "id": 40,
            "character": "Audience participation\/dancing",
            "production": "RTE Swipe",
            "director": null,
            "company": "RTE",
            "year": 2016,
            "created_at": "2023-03-18T11:44:26.000000Z",
            "updated_at": "2023-03-18T11:44:26.000000Z"
        },
        {
            "id": 41,
            "character": "Tazia",
            "production": "Survivor - U.S. Mini TV Series",
            "director": null,
            "company": null,
            "year": 2016,
            "created_at": "2023-03-18T11:45:00.000000Z",
            "updated_at": "2023-03-18T11:45:00.000000Z"
        },
        {
            "id": 42,
            "character": "Dancing at carnival party",
            "production": "RTE Elev8",
            "director": null,
            "company": "RTE",
            "year": 2014,
            "created_at": "2023-03-18T11:46:20.000000Z",
            "updated_at": "2023-03-18T11:46:20.000000Z"
        },
        {
            "id": 43,
            "character": "Singer",
            "production": "Revival - Scorched Earth Trilogy",
            "director": "John McIlduff",
            "company": "Irish National Opera & Dumb World",
            "year": 2022,
            "created_at": "2023-03-18T11:51:23.000000Z",
            "updated_at": "2023-03-18T11:51:23.000000Z"
        },
        {
            "id": 44,
            "character": "Children Choir",
            "production": "La Boheme",
            "director": "Fergus Shiel",
            "company": "Irish National Opera",
            "year": 2021,
            "created_at": "2023-03-18T11:56:06.000000Z",
            "updated_at": "2023-03-18T11:56:06.000000Z"
        },
        {
            "id": 45,
            "character": "Child chorus",
            "production": "Carmen",
            "director": "Paul Curran",
            "company": "Irish National Opera",
            "year": 2022,
            "created_at": "2023-03-19T12:03:59.000000Z",
            "updated_at": "2023-03-19T12:03:59.000000Z"
        },
        {
            "id": 46,
            "character": "Young Cenerentola",
            "production": "Cenerentola",
            "director": "Orpha Phelan",
            "company": "Irish National Opera",
            "year": 2019,
            "created_at": "2023-03-19T12:05:44.000000Z",
            "updated_at": "2023-03-19T12:05:44.000000Z"
        },
        {
            "id": 47,
            "character": "Child extra",
            "production": "Hole in the ground",
            "director": "Lee Cronin",
            "company": null,
            "year": 2017,
            "created_at": "2023-03-20T13:50:23.000000Z",
            "updated_at": "2023-03-20T13:50:23.000000Z"
        },
        {
            "id": 48,
            "character": "Child extra",
            "production": "RTE Jnr promo",
            "director": null,
            "company": "RTE",
            "year": 2017,
            "created_at": "2023-03-20T13:51:29.000000Z",
            "updated_at": "2023-03-20T13:51:29.000000Z"
        },
        {
            "id": 49,
            "character": "Janet",
            "production": "Janet short film",
            "director": "Olivia McLaughlin",
            "company": null,
            "year": 2019,
            "created_at": "2023-03-20T13:54:47.000000Z",
            "updated_at": "2023-03-20T13:54:47.000000Z"
        },
        {
            "id": 52,
            "character": "Part of 8 child choir",
            "production": "The First Child",
            "director": "Enda Walsh",
            "company": "Irish National Opera and Landmark Productions (toured around Ireland)",
            "year": 2022,
            "created_at": "2023-03-20T15:57:49.000000Z",
            "updated_at": "2023-03-20T15:57:49.000000Z"
        }];

    public formData = {};

  public edit(id: any) {
    this.formData = {"id": 54,
      "character": "Young Tisbe, Red riding hood",
      "production": "La Cenerentola",
      "director": "Orpha Phelan",
      "company": "Irish National Opera in The Bord gais",
      "year": 2019}
  }

  public remove(id: any){
    console.log(id);
  }

  public save(data: any){
    console.log(data);
  }

  public updateTable(){
    this.tableData = [];
  }
}
