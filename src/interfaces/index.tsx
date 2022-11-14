export type TRecommendedContent = {
	id: string,
	image_name: string,
	image_link: string,
	book_name: string,
	Author: string,
	Category: string,
}

export type TUserProfile = {
  name: string,
  age: number,
  school: string,
  avatar: string,
  badges: TBadge[],
}

export type TBadge = {
	name: string,
	description: string,
	icon: string,
}
