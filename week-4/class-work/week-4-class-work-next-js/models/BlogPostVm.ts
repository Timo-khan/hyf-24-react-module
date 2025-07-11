export class BlogPostVm {
  id: number = 0;
  title: string = "";
  body: string = "";
  postedBy: string = "";
  postedOn: string = "";

  constructor(
    id: number,
    title: string,
    body: string,
    postedBy: string,
    postedOn: string
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.postedBy = postedBy;
    this.postedOn = postedOn;
  }
}
