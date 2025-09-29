'use client';
import React from 'react';
import AiConversation from './aichat';

const DayPlanner = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{
        '--checkbox-tick-svg': 'url("data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e")',
        fontFamily: 'Inter, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight min-w-72">Your Day Planner</p>
            </div>
            <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Today's Schedule</h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#cfdbe7] bg-slate-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-120 px-4 py-3 text-left text-[#0d141b] w-[400px] text-sm font-medium leading-normal">Time</th>
                      <th className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-240 px-4 py-3 text-left text-[#0d141b] w-[400px] text-sm font-medium leading-normal">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-120 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">9:00 AM</td>
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-240 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">Morning Meeting</td>
                    </tr>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-120 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">10:30 AM</td>
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-240 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">Project Work</td>
                    </tr>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-120 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">12:00 PM</td>
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-240 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">Lunch Break</td>
                    </tr>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-120 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">1.00 PM</td>
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-240 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">Client Call</td>
                    </tr>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-120 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">3:00 PM</td>
                      <td className="table-870b4b9a-0283-4d4d-8c1e-005143691cdc-column-240 h-[72px] px-4 py-2 w-[400px] text-[#4c739a] text-sm font-normal leading-normal">Wrap Up</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Note: The <style> block needs to be handled separately. You can't put it directly in JSX. */}
            </div>
            <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">To-Do List</h2>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cfdbe7] border-2 bg-transparent text-[#1172d4] checked:bg-[#1172d4] checked:border-[#1172d4] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cfdbe7] focus:outline-none"
                />
                <p className="text-[#0d141b] text-base font-normal leading-normal">Prepare presentation slides</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cfdbe7] border-2 bg-transparent text-[#1172d4] checked:bg-[#1172d4] checked:border-[#1172d4] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cfdbe7] focus:outline-none"
                />
                <p className="text-[#0d141b] text-base font-normal leading-normal">Respond to emails</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#cfdbe7] border-2 bg-transparent text-[#1172d4] checked:bg-[#1172d4] checked:border-[#1172d4] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#cfdbe7] focus:outline-none"
                />
                <p className="text-[#0d141b] text-base font-normal leading-normal">Review project proposal</p>
              </label>
            </div>
          </div>
          <div className="layout-content-container flex flex-col w-[360px]">
            <div className="flex justify-end overflow-hidden px-5 pb-5">
              <div className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-[#1172d4] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] min-w-0 gap-4 pl-4 pr-6">
                <div className="text-slate-50" data-icon="ChatCircleDots" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"
                    ></path>
                  </svg>
                </div>
                <span className="truncate">AI Assistant</span>
              </div>
            </div>
            <AiConversation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayPlanner;
