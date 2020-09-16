import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { VotingDashboardComponent } from './voting-dashboard/voting-dashboard.component';
import { ValuesRankingComponent } from './values-ranking/values-ranking.component';
import { GiveRankingComponent } from './give-ranking/give-ranking.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { VotingComponent } from './voting/voting.component';
import { RewardsComponent } from './rewards/rewards.component';
import { CreateProposalsComponent } from './create-proposals/create-proposals.component';
import { ProposalsHistoryComponent } from './proposals-history/proposals-history.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { ProposalViewComponent } from './proposal-view/proposal-view.component';
import { ProposalHistoryViewComponent } from './proposal-history-view/proposal-history-view.component';
import { WalletComponent } from './wallet/wallet.component'

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'voting-dashboard', component: VotingDashboardComponent },
  { path: 'values-ranking', component: ValuesRankingComponent },
  { path: 'give-ranking', component: GiveRankingComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'proposal-view', component: ProposalViewComponent },
  { path: 'proposal-history', component: ProposalsHistoryComponent },
  { path: 'proposal-history-view', component: ProposalHistoryViewComponent },
  { path: 'voting', component: VotingComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'create-proposal', component: CreateProposalsComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: 'wallet', component: WalletComponent },

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
