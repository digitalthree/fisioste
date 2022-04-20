import type { NextApiRequest, NextApiResponse } from 'next'
import {TeamMember, teamMembers} from "../../../data/team";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TeamMember[]>
) {
    const team = await fetchTeamMembers()

    res.status(200).json(team)
}

export async function fetchTeamMembers() {
    return teamMembers;
}
