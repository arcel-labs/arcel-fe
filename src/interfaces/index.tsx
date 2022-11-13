export type TRecommendedContent = {
	id_title: number,
	title: string,
	description: string,
	subject: string,
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
