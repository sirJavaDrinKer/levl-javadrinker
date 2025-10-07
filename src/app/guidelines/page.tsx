import Image from "next/image";
import CollapsibleSection from "../components/collapsible-section";

export default function Home() {
  return ( 
    <div className="font-sans w-full min-h-screen pb-20 flex flex-col items-center">
        <div className="p-10 max-w-[90%] mx-auto flex flex-col items-center">
            <h1 className="text-4xl font-bold"> Guidelines </h1>
            <p>We ask that while you are a participatory member of LEVL, you follow our code of conduct as written below.</p>
        </div>

      {/* Section A */}
      <CollapsibleSection title="(A) General Conduct" defaultOpen={false}>
        <p><strong>A.1 Common Courtesy:</strong> All participants are expected to treat competitors alongside casters and league officials with respect. Unacceptable language such as threats, abusive language, and harassment will not be tolerated in any form.</p>
          <p><strong>A.2 Harassment & Discrimination:</strong> This league holds no place for discrimination in any form, including but not limited to discrimination based on: race, gender identity, disability, nationality, or sexual orientation.</p>
          <p><strong>A.3 Professionalism:</strong> During broadcasting, participants are expected to cooperate with broadcasting staff. Outside of games and broadcasting, participants agree to cooperate with league officials.</p>
          <div>
            <p><strong>A.4 Unbecoming Conduct:</strong> Extensive evidence must be provided before administration may act on the following. A player&apos;s obligation to uphold certain values of the league may extend outside official channels. Generally socially unacceptable actions or actions that reflect a deeply negative light on the league may be punished even if enacted outside our community borders. The league reserves the right to impose penalties up to and including permanent disbarment from participation and the withholding of winnings if any party is found to be guilty of particularly egregious behavior.</p>
            <p className="pl-20"><strong>A.4.1 Falsified Records:</strong> Any submitted evidence that is revealed to be false in an attempt to smear another team/player&apos;s reputation or standing with the league is a serious offense and may be treated as such.</p>
          </div>

          <hr className="border-t-2 border-stone-400 my-4" />

          <p>Below is our stance on BM (bad manners) within competitive play.</p>
          <p><strong>A.5 Excessive BM:</strong> The league withholds the right to issue penalties based on our ideas of “excessive BM”.</p>
          <div className="w-full text-center"><h3 className="text-1xl font-semibold">Examples of Excessive BM</h3></div>

          <div  className="pl-20">
            <ol style={{ listStyleType: "disc" }}>
              <li>Repeated personal attacks.</li>
              <li>Serious disputes being brought to DMs or our social platforms such as discord.</li>
              <li>Extreme explicit language such as slurs.</li>
              <li>Repeated escalation of an ongoing “beef” or interpersonal situation.</li>
            </ol>
          </div>

          <div className="w-full text-center"><h3 className="text-1xl font-semibold">Examples of Non-Excessive BM</h3></div>
          <div className="pl-20">
            <ol style={{ listStyleType: "disc" }}>
              <li>Playful or reciprocated taunting.</li>
              <li>In game actions such as tea-bagging or body shooting.</li>
              <li>Light taunting.</li>
            </ol>
          </div>
      </CollapsibleSection>

      <div className="p-4"></div>

      {/* Section B */}
      <CollapsibleSection title="(B) Players & Rosters" defaultOpen={false}>

        <p><strong>B.1 Player Eligibility:</strong> All players must be above the age of 13 to participate, no account sharing is permitted, all players must register on their main account.</p>
        <p><strong>B.2 Team Rosters:</strong> Teams must have a roster ranging from 5-7 active players, allowing for 5 main players and 2 substitute players. Coaching staff and staff outside of players are not included in the roster count.</p>
        <p><strong>B.3 Per Player Rank Limit:</strong> All players must be under or at the rank of immortal three, and may not have been above immortal three for the past five acts.</p>
        <p><strong>B.4 Team Average Rank Limit:</strong> When averaged, player ranks must not exceed immortal one.</p>

        <p><strong>B.5 Roster Lock:</strong> At this moment in time, LEVL does not participate in using a roster lock.</p>
        <div className="pl-20">
          <p><strong>B.5.1 Timing of Roster Changes:</strong> If a match is less than 72h away, a participating team&apos;s attempt at roster changes may be denied.</p>
          <p><strong>B.5.2 Emergency Substitutions:</strong> An emergency substitute may be accepted under real emergency situations. The league maintains the final say on all on-record roster moves.</p>
        </div>
        <p><strong>B.6 Team Logos & Names:</strong> All team and player names must be semi-appropriate. The league reserves the right to reject any names, logos, or team imaging.</p>
      </CollapsibleSection>

      <div className="p-4"></div>

      <CollapsibleSection title="(C) Competitive Integrity" defaultOpen={false}>
        <p><strong>C.1 Collusion:</strong> “Throwing” a match, intentionally losing a match, or colluding with another team to manipulate match results is strictly forbidden and will always result in a team penalty.</p>
        <p><strong>C.2 Exploitation of Bugs:</strong> The intentional use of in-game bugs to gain a competitive advantage is forbidden. Action is delegated to league staff.</p>
        <p><strong>C.3 Ghosting:</strong> Players are strictly forbidden from receiving outside information about their opponents&apos; positions or strategies during a match. This includes but is not limited to text chat, twitch streams, etc.</p>
      </CollapsibleSection>

      <div className="p-4"></div>

      <CollapsibleSection title="(D) Procedures" defaultOpen={false}>
        <p><strong>D.1 Punctuality:</strong> Teams must be inside the lobby at the scheduled time a 10-minute grace period is given before any penalty is issued. Penalties may range up to full series forfeiture.</p>
        <p><strong>D.2 Game Pauses:</strong> A team is allotted a total of 15 minutes of &apos;tech-time&apos; through all maps and players. Use the pause match time option to activate a tech pause. On the other hand, tactical timeouts are all handled via valorant&apos;s in-game timeout system.</p>
        <div className="pl-10">
            <ol style={{ listStyleType: "disc" }}>
              <p><strong>D.2.1 Etiquette:</strong> Once a pause is initiated, it may only be ended by a league official.</p>
              <p><strong>D.2.2 Exceeding Tech Time:</strong> If a team&apos;s 15 minute tech time is exceeded, they will be denied the opportunity to initiate any further tech pauses except under extreme circumstances that may be accepted by staff.</p>
            </ol>
        </div>
        <p><strong>D.3 Staff Presence:</strong> A match may only proceed with a league official in the lobby, if no staff members are available within 15 minutes of a match&apos;s start time, the match must be re-scheduled.</p>
        <p><strong>D.4 Score Reporting:</strong> Either the IGL or team manager is to post a link to the TRN Tracker page of all participated-in maps after the match has ended.</p>
        <p><strong>D.9 Coach-Team Communication:</strong> Communication between coach and team ends after the game is fully loaded in (post agent select). Communication between coach and team may only resume during tactical timeouts.</p>
        <p><strong>D.11 Scheduled Delays:</strong> Staff must be notified of delays at least an hour in advance. Matches may only be shifted within the day unless given six hours of advanced notice.</p>
        
        <hr className="border-t-2 border-stone-400 my-4" />
        
        <p><strong>D.5 Determination of Sides:</strong> If seeding is available, the higher seed will be given the opportunity to have first ban, otherwise the deciding party will be given via coin-flip.</p>
        <p><strong>D.6 Veto Process:</strong> The map selection process will occur within the league discord or in a provided first-party or third-party website.</p>
        <div className="pl-10">
            <ol style={{ listStyleType: "disc" }}>
              <li>BO3: A-Ban, B-Ban, A-Pick, B-Pick, A-Ban, B-Ban, B-Side Map 1, A-Side Map 2, A-Side Map 3</li>
              <li>BO5: A-Ban, B-Ban, Rotate picks until all are selected. A-Side Map 1, B-Side Map 2, A-Side Map 3, B-Side Map 4, B-Side Map 5</li>
            </ol>
        </div>
        <p><strong>D.7 Lobby Hosting:</strong> Also see D.3. The lobby will be initiated by staff, if not initiated by staff, the role of party owner must be transferred to the streamer or main referee of the match.</p>
        <div  className="pl-10">
            <ol style={{ listStyleType: "disc" }}>
              <li>Standard Mode</li>
              <li>Cheats: Off</li>
              <li>Tournament Mode: On</li>
              <li>Overtime win-by-two: On</li>
              <li>Play All: Off</li>
              <li>Match History: On</li>
            </ol>
        </div>

        <hr className="border-t-2 border-stone-400 my-4" />

        <p><strong>D.8 Ping:</strong> Server location will be chosen by staff in an attempt to make the match as even as possible. Upon dispute, pings may be averaged to insure the most fairness. Staff have the final say on server location.</p>

        <p><strong>D.10 Voice Channels:</strong> All teams must be inside of their allotted VC&apos;s within our discord community before a match can begin.</p>
        <p>Up to 2 coaching staffers or substitute players from a respective team may be present in a VC.</p>
        <p>All 5 participating players must be inside of the VC.</p>

        <p><strong>D.12 Agents and Maps:</strong> The map cycle and agent pool at the beginning of the event will be used until the end of the event.</p>
        
        <hr className="border-t-2 border-stone-400 my-4" />

        <p><strong>D.13 Personal Streaming:</strong> Players and coaches may stream their POVs under the following conditions:</p>
        <p>The event title is included in an obvious or viewable spot within the stream.</p>
        <p>A stream delay one minute greater than the core stream is used, this will typically be a player-stream delay of three minutes.</p>
        <p>Conduct is upheld within the stream and stream chat.</p>
        <p><strong>D.14 Spectating:</strong> Only authorized spectators will be allowed within the lobby.</p>

      </CollapsibleSection>

      <div className="p-4"></div>
      
      <CollapsibleSection title="(E) Scaled Response" defaultOpen={false}>
        <p><strong>E.1 Infraction Scaling:</strong></p>
        <div className="pl-10">
        <p><strong>Minor:</strong> Accidental violation or in-severe violations of the guidelines.</p>
        <p>Isolated to a singular member.</p>
        <p>Typically a simple private reminder suffices.</p>
        <br />
        <p><strong>Moderate:</strong> Violation of guidelines that have some form of visible negative impact on the community, but don’t read as truly malicious.</p>
        <p>Repercussions rarely to extend to the team.</p>
        <p>Response may range from a reminder, up to but not limited by a mute.</p>
        <p>Staff actions are publicly stated and recorded beyond this point.</p>
        <br />
        <p><strong>Serious:</strong> Repeated purposeful violations that actively harm the community or the integrity of the event.</p>
        <p>Repercussions are likely to be applied to the entire team.</p>
        <p>Response may range from a disbarment from participating in an upcoming match, up to but not limited by a map forfeiture in an ongoing or upcoming match.</p>
        <br />
        <p><strong>Critical:</strong> Actions that are entirely unacceptable, pose a serious threat to community, and event integrity.</p>
        <p>Repercussions are always applied to the entire team in some form.</p>
        <p>Response may range from disbarment from participation in current or future events, and depending on severity, higher action such as team disbarment may occur.</p>
        <p>Only a last resort when previous requests of correction fail.</p>
        </div>
        <br />

        <p><strong>E.2 System of Infractions:</strong> Player infractions are recorded at and past “moderate”, a player will remain in their current standing up until the next match is played. Depending on previous actions, a player may be stuck at an infraction level for the remainder of an event.</p>
      </CollapsibleSection>
    </div>
  );
}