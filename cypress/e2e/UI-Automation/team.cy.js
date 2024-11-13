
import TeamPage from '../../support/PageObject/TeamPage';
import ServicePage from '../../support/PageObject/ServicePage'; // Adjust if needed

describe('Team Module Tests', () => {
    beforeEach(() => {
        cy.login();
        cy.wait(2000);
        TeamPage.clickToTeamTab(); // Move to the Team tab at the start of each test
    });

    it('should invite user with a unique email', () => {
        const timestamp = new Date().getTime();
        const uniqueEmail = `pooja.chaudhari+${timestamp}@p99soft.com`;
    
        TeamPage.clickInviteUserbutton();
        TeamPage.Enteruserinfo('Pooja', 'Chaudhari', uniqueEmail, 'QA', '919960432037');
        TeamPage.clickfinalinviteuser();
    });

    it('should create a new team', () => {
        const timestamp = new Date().getTime();
        const uniqueTeamName = `QA team ${timestamp}`;
    
        TeamPage.clickTeamstab();
        TeamPage.clickCreatenewteam();
        TeamPage.enterteaminfo(uniqueTeamName, 'This is the QA team');
        TeamPage.createTeam();
    });

    //Uncomment and update when ready to run
    it('Update team', () => {
       const newDescription = 'This is the updated QA team description';
        TeamPage.clickTeamstab();
        TeamPage.editteam();
        TeamPage.updateTeamInfo(newDescription);
        TeamPage.clickupdate();
    });
    // it('Add user in the team', () => {
    //      TeamPage.clickTeamstab();
    //       TeamPage.addteamuser();
    //      TeamPage.updateTeamInfo(newDescription);
    //      TeamPage.clickupdate();
    //  });
    it('create new schedule', () => {
        const timestamp = new Date().getTime();
        const uniqueSchedulename = `Schedule ${timestamp}`;
        TeamPage.createschedule();
        TeamPage.enterschedulename(uniqueSchedulename);
       TeamPage.selecttimezone();
       TeamPage.selectuser();
       TeamPage.selectdate();
       //TeamPage.removelayer();
       TeamPage.finalcreateschedule();

    });
    it('Edit schedule', () => {
        const timestamp = new Date().getTime();
        const uniqueSchedulename = `Schedule ${timestamp}`;
    TeamPage.clickscheduletab();
    TeamPage.editSchedule(uniqueSchedulename);
    TeamPage.finalcreateschedule();

        

   });
   it('create new escalation policy', () => {
    const timestamp = new Date().getTime();
    const uniquepolicyname = `Escalation Policy ${timestamp}`;
    TeamPage.escalationtab();
    TeamPage.createescalationpolicy();
    TeamPage.enterscheduleinfo(uniquepolicyname, "This is the escaltion policy");
    TeamPage.addnotificationrule();
    TeamPage.selectscheduleuser();
    TeamPage.escalatepolicytime("5");
    TeamPage.finalclickcreatepolicy();
  });
  it('Edit Escalation Policy', () => {
        const timestamp = new Date().getTime();
        const uniquepolicyname = `Escalation Policy ${timestamp}`;
    TeamPage.escalationtab();
    cy.wait(4000);
    TeamPage.editescalationpolicy(uniquepolicyname);
    TeamPage.finalclickcreatepolicy();

        

   });

 });
