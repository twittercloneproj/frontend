import { VoteType } from './vote-type';

export class VotePayload {
    voteType: VoteType;
    tweetId: number;
}