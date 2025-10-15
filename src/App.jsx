import React, { useState } from 'react';
import { Clock, MapPin, MessageSquare, Target, Palette, DollarSign, Video } from 'lucide-react';
import { venueSpecs } from './data/venueSpecs';
import { personas } from './data/personaData';

const PersonaJourneyMap = () => {
  const [selectedPersona, setSelectedPersona] = useState('firstTimeBuyer');
  const [showSpecs, setShowSpecs] = useState(false);
  const [showCreativeBrief, setShowCreativeBrief] = useState(false);
  const [showJourney, setShowJourney] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [showScience, setShowScience] = useState(false);
  const [showProduction, setShowProduction] = useState(false);
  const [showImplementation, setShowImplementation] = useState(false);

  // Budget calculator state
  const [dailyBudget, setDailyBudget] = useState(100);
  const [hoursPerDay, setHoursPerDay] = useState(8);

  const currentPersona = personas[selectedPersona];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1f29] via-[#1d222b] to-[#0c1a3a]">
      {/* Rebel iQ Header with Logo */}
      <div className="bg-gradient-to-r from-[#021964] to-[#0c39c8] border-b-2 border-[#375CFB] shadow-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://start.leadpops.com/hubfs/Leadpops%2BRebeliQ_Color@2x.png?width=860&t=1682946041202"
              alt="Rebel iQ"
              className="h-10"
            />
            <div className="h-8 w-px bg-white/30"></div>
            <h1 className="text-xl font-bold text-white">Mortgage Persona Journey Maps</h1>
          </div>
          <div className="flex items-center gap-2 bg-[#FFC238]/20 px-3 py-1 rounded-full border border-[#FFC238]/50">
            <svg className="w-4 h-4 text-[#FFC238]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold text-[#FFC238]">CONFIDENTIAL</span>
          </div>
        </div>
      </div>

      {/* Confidential Notice */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="bg-gradient-to-r from-[#FF6633]/10 to-[#FFC238]/10 border border-[#FFC238]/30 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#FFC238] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Internal Use Only - Rebel iQ Proprietary Information</h3>
              <p className="text-xs text-gray-300">This document contains confidential customer strategy information. Not for external distribution. © {new Date().getFullYear()} Rebel iQ. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 mb-6">
          <p className="text-gray-300 text-center">Strategic OOH ad placement based on daily customer routines</p>
        </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 mb-6">
        <label className="block text-sm font-semibold text-white mb-3">Select Mortgage Product:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.keys(personas).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedPersona(key)}
              className={`p-3 rounded-xl font-semibold transition-all ${
                selectedPersona === key
                  ? 'bg-gradient-to-r from-[#375CFB] to-[#0c39c8] text-white shadow-lg shadow-[#375CFB]/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {personas[key].name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 mb-6">
        <div className="border-l-4 border-[#375CFB] pl-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{currentPersona.name}</h2>
          <p className="text-lg text-[#FFC238] font-semibold mb-4">{currentPersona.product}</p>
          <div className="bg-[#375CFB]/10 border border-[#375CFB]/30 p-4 rounded-xl mb-4">
            <p className="text-gray-200 italic">{currentPersona.persona}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#375CFB]" />
              Profile
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="font-semibold text-gray-400 min-w-24">Age:</span>
                <span className="text-gray-200">{currentPersona.profile.age}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gray-400 min-w-24">Income:</span>
                <span className="text-gray-200">{currentPersona.profile.income}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gray-400 min-w-24">Employment:</span>
                <span className="text-gray-200">{currentPersona.profile.employment}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-gray-400 min-w-24">Lifestyle:</span>
                <span className="text-gray-200">{currentPersona.profile.lifestyle}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">Pain Points</h3>
            <ul className="space-y-2">
              {currentPersona.profile.painPoints.map((pain, idx) => (
                <li key={idx} className="text-sm text-gray-200 flex items-start gap-2">
                  <span className="text-[#FF6633] font-bold">•</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 mb-6">
        <button
          onClick={() => setShowCreativeBrief(!showCreativeBrief)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Palette className="w-6 h-6 text-[#FFC238]" />
            Creative Brief & Design Direction
          </h3>
          <span className="text-2xl text-[#FFC238]">{showCreativeBrief ? '−' : '+'}</span>
        </button>

        {showCreativeBrief && (
          <div className="mt-6 space-y-6">
            <div className="bg-slate-900 text-white rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 text-blue-400">📐 Exact Technical Specifications</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded">
                    <div className="font-bold text-blue-300 mb-2">Highway Billboard (Landscape)</div>
                    <ul className="text-sm space-y-1">
                      <li>• Resolution: <span className="font-mono text-green-400">1920x1080px</span></li>
                      <li>• Aspect Ratio: <span className="font-mono text-green-400">16:9</span></li>
                      <li>• Format: JPG (static) or MP4 (video)</li>
                      <li>• Ad Length: 6-10 seconds MAX</li>
                      <li>• Letter Height: 50+ inches minimum</li>
                      <li>• Font Weight: 700-900 (Bold to Black)</li>
                      <li>• Contrast Ratio: 5:1 minimum (7:1 preferred)</li>
                      <li>• File Size: Under 5MB (static), 10MB (video)</li>
                    </ul>
                  </div>

                  <div className="bg-slate-800 p-4 rounded">
                    <div className="font-bold text-blue-300 mb-2">Digital Screens - Landscape</div>
                    <ul className="text-sm space-y-1">
                      <li>• Resolution: <span className="font-mono text-green-400">1920x1080px</span></li>
                      <li>• Aspect Ratio: <span className="font-mono text-green-400">16:9</span></li>
                      <li>• Format: MP4 (H.264 codec)</li>
                      <li>• Bitrate: 5-10 Mbps</li>
                      <li>• Frame Rate: 30fps</li>
                      <li>• Ad Length: 15-30 seconds</li>
                      <li>• Audio: 44.1kHz stereo (design for mute)</li>
                      <li>• File Size: Under 50MB</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded">
                    <div className="font-bold text-blue-300 mb-2">Digital Screens - Portrait</div>
                    <ul className="text-sm space-y-1">
                      <li>• Resolution: <span className="font-mono text-green-400">1080x1920px</span></li>
                      <li>• Aspect Ratio: <span className="font-mono text-green-400">9:16</span></li>
                      <li>• Format: MP4 (H.264 codec)</li>
                      <li>• Bitrate: 5-10 Mbps</li>
                      <li>• Frame Rate: 30fps</li>
                      <li>• Ad Length: 8-30 seconds (venue dependent)</li>
                      <li>• Audio: 44.1kHz stereo (design for mute)</li>
                      <li>• File Size: Under 50MB</li>
                    </ul>
                  </div>

                  <div className="bg-slate-800 p-4 rounded">
                    <div className="font-bold text-blue-300 mb-2">Color Specifications</div>
                    <ul className="text-sm space-y-1">
                      <li>• Color Space: <span className="font-mono text-green-400">sRGB</span></li>
                      <li>• Best Contrast: Black (#000000) on Yellow (#FFFF00)</li>
                      <li>• Alternative: White (#FFFFFF) on Navy (#000080)</li>
                      <li>• Avoid: Gradients, low-contrast combos</li>
                      <li>• Test: Check at 50% opacity for visibility</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-slate-800 p-4 rounded">
                <div className="font-bold text-blue-300 mb-2">Typography Specifications</div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-green-400 font-semibold mb-1">Approved Fonts:</div>
                    <ul className="space-y-1">
                      <li>• Helvetica Neue (Bold/Black)</li>
                      <li>• Arial Black</li>
                      <li>• Futura (Bold)</li>
                      <li>• Roboto (Bold 700+)</li>
                      <li>• Montserrat (Bold 700+)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold mb-1">Font Sizing:</div>
                    <ul className="space-y-1">
                      <li>• Highway: 50+ inch letters</li>
                      <li>• Surface: 30-40 inch letters</li>
                      <li>• Digital: 15-20% of screen height</li>
                      <li>• Minimum: 100px for 1920x1080</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-red-400 font-semibold mb-1">Never Use:</div>
                    <ul className="space-y-1">
                      <li>• Script/cursive fonts</li>
                      <li>• Thin weights (&lt;400)</li>
                      <li>• Serif fonts (highways)</li>
                      <li>• Condensed/narrow fonts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Visual Style</h4>
                  <p className="text-sm text-purple-800">{currentPersona.creativeBrief.visualStyle}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Color Palette</h4>
                  <p className="text-sm text-purple-800">{currentPersona.creativeBrief.colorPalette}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Typography</h4>
                  <p className="text-sm text-purple-800">{currentPersona.creativeBrief.typography}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Tone</h4>
                  <p className="text-sm text-purple-800">{currentPersona.creativeBrief.tone}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Key Messages</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    {currentPersona.creativeBrief.keyMessages.map((msg, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-600">•</span>
                        <span>{msg}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Imagery Suggestions</h4>
                  <p className="text-sm text-indigo-800">{currentPersona.creativeBrief.imagery}</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">CTA Style</h4>
                  <p className="text-sm text-indigo-800">{currentPersona.creativeBrief.ctaStyle}</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2 flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Video Production Approach
                  </h4>
                  <p className="text-sm text-pink-800">{currentPersona.creativeBrief.videoApproach}</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">⚠️ Avoid These Mistakes</h4>
                  <p className="text-sm text-red-800">{currentPersona.creativeBrief.avoid}</p>
                </div>

                {currentPersona.creativeBrief.scienceApplication && (
                  <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                    <h4 className="font-bold text-emerald-900 mb-2">🧠 Science Application</h4>
                    <p className="text-sm text-emerald-800">{currentPersona.creativeBrief.scienceApplication}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 mb-6">
        <button
          onClick={() => setShowJourney(!showJourney)}
          className="w-full flex items-center justify-between text-left mb-6"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-[#375CFB]" />
            Daily Journey Map
          </h3>
          <span className="text-2xl text-[#375CFB]">{showJourney ? '−' : '+'}</span>
        </button>

        {showJourney && (
          <>
            <div className="mb-4 flex items-center gap-3">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              showSpecs
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {showSpecs ? 'Hide' : 'Show'} Design Specs & Budget
          </button>
        </div>

        <div className="space-y-4">
          {currentPersona.journey.map((stop, idx) => (
            <div
              key={idx}
              className={`border rounded-lg p-5 transition-all ${
                stop.venue === 'N/A'
                  ? 'bg-slate-50 border-slate-200 opacity-60'
                  : 'bg-white border-blue-200 hover:shadow-md'
              }`}
            >
              <div className="flex flex-wrap items-start gap-4 mb-3">
                <div className="flex items-center gap-2 min-w-32">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-800">{stop.time}</span>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <MapPin className="w-5 h-5 text-slate-500" />
                  <span className="font-semibold text-slate-700">{stop.location}</span>
                  <span className="text-slate-500 text-sm">• {stop.activity}</span>
                </div>
              </div>

              {stop.venue !== 'N/A' ? (
                <>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-3">
                    <div className="text-xs font-semibold text-blue-800 mb-1">OOH VENUE:</div>
                    <div className="text-sm font-bold text-blue-900">{stop.venue}</div>
                  </div>

                  {showSpecs && venueSpecs[stop.venue] && (
                    <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-4 mb-3">
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-xs font-bold text-slate-600 mb-2">📐 TECHNICAL SPECS</div>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Resolution:</span>
                              <span className="font-mono text-slate-900">{venueSpecs[stop.venue].resolution}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Orientation:</span>
                              <span className="font-semibold text-slate-900">{venueSpecs[stop.venue].orientation}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Ad Length:</span>
                              <span className="font-semibold text-slate-900">{venueSpecs[stop.venue].adLength}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Frequency:</span>
                              <span className="font-semibold text-slate-900">{venueSpecs[stop.venue].frequency}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Dwell Time:</span>
                              <span className="font-semibold text-slate-900">{venueSpecs[stop.venue].dwellTime}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            BUDGET RECOMMENDATIONS
                          </div>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Cost/Hour:</span>
                              <span className="font-semibold text-emerald-700">{venueSpecs[stop.venue].budgetRec}</span>
                            </div>
                            <div className="bg-emerald-50 p-2 rounded mt-2">
                              <div className="text-xs font-bold text-emerald-800 mb-1">$50/day budget:</div>
                              <div className="text-xs text-emerald-900">{venueSpecs[stop.venue].budget50}</div>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <div className="text-xs font-bold text-blue-800 mb-1">$100/day budget:</div>
                              <div className="text-xs text-blue-900">{venueSpecs[stop.venue].budget100}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t-2 border-slate-300 pt-4 mt-4">
                        <div className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1">
                          <Palette className="w-4 h-4" />
                          DESIGN PROMPT
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">{venueSpecs[stop.venue].designPrompt}</p>

                        <div className="text-xs font-bold text-slate-600 mb-2">💡 CREATIVE NOTES</div>
                        <p className="text-sm text-slate-700 leading-relaxed italic">{venueSpecs[stop.venue].creativeNotes}</p>
                      </div>
                    </div>
                  )}

                  <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-3">
                    <div className="text-xs font-semibold text-green-800 mb-1 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      AD MESSAGE: ({stop.wordCount} words)
                      {stop.wordCount <= 7 ? (
                        <span className="text-xs bg-green-200 text-green-900 px-2 py-0.5 rounded">✓ Optimal</span>
                      ) : stop.wordCount <= 10 ? (
                        <span className="text-xs bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded">⚠ Pushing limit</span>
                      ) : (
                        <span className="text-xs bg-red-200 text-red-900 px-2 py-0.5 rounded">✗ Too long</span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-green-900 mb-2">&quot;{stop.message}&quot;</div>
                    {stop.scienceNote && (
                      <div className="text-xs text-green-800 italic bg-green-100 p-2 rounded mt-2">
                        <strong>Science Note:</strong> {stop.scienceNote}
                      </div>
                    )}
                  </div>

                  <div className="bg-amber-50 p-4 rounded">
                    <div className="text-xs font-semibold text-amber-800 mb-1">STRATEGY:</div>
                    <div className="text-sm text-amber-900">{stop.strategy}</div>
                  </div>
                </>
              ) : (
                <div className="text-sm text-slate-500 italic">{stop.message}</div>
              )}
            </div>
          ))}
        </div>
          </>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#375CFB] to-[#0c39c8] border border-[#375CFB]/30 rounded-2xl shadow-2xl p-8 mt-6 text-white">
        <button
          onClick={() => setShowBudget(!showBudget)}
          className="w-full flex items-center justify-between text-left mb-6"
        >
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <DollarSign className="w-7 h-7" />
            Budget Calculator & Allocation Strategy
          </h3>
          <span className="text-3xl">{showBudget ? '−' : '+'}</span>
        </button>

        {showBudget && (
          <>
            {/* Budget Calculator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h4 className="font-bold text-xl mb-4">💰 Budget Calculator</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Daily Budget ($)</label>
                  <input
                    type="number"
                    value={dailyBudget}
                    onChange={(e) => setDailyBudget(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg text-slate-900 font-semibold text-lg"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Hours per Day</label>
                  <input
                    type="number"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg text-slate-900 font-semibold text-lg"
                    min="1"
                    max="24"
                  />
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-emerald-200 text-sm mb-1">Cost Per Hour</div>
                  <div className="text-3xl font-bold">${(dailyBudget / hoursPerDay).toFixed(2)}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-emerald-200 text-sm mb-1">Monthly Budget (30 days)</div>
                  <div className="text-3xl font-bold">${(dailyBudget * 30).toFixed(0)}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-emerald-200 text-sm mb-1">Est. Plays/Day (avg $0.19/play)</div>
                  <div className="text-3xl font-bold">{Math.floor(dailyBudget / 0.19)}</div>
                </div>
              </div>

              {/* Venue Cost Examples from Screenshots */}
              <div className="mt-6 bg-slate-900/50 rounded-lg p-4">
                <h5 className="font-bold mb-3">Real Venue Costs (per play):</h5>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between"><span>Grocery stores:</span> <span className="font-mono">$0.07 - $0.09</span></div>
                  <div className="flex justify-between"><span>Pharmacies:</span> <span className="font-mono">$0.06</span></div>
                  <div className="flex justify-between"><span>Office buildings (elevators):</span> <span className="font-mono">$0.06</span></div>
                  <div className="flex justify-between"><span>Billboards:</span> <span className="font-mono">$0.18 - $0.24</span></div>
                  <div className="flex justify-between"><span>Gyms (GymTV):</span> <span className="font-mono">$0.42</span></div>
                  <div className="flex justify-between"><span>Bus shelters:</span> <span className="font-mono">$0.09</span></div>
                  <div className="flex justify-between"><span>Convenience stores:</span> <span className="font-mono">$0.06</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Average cost/play:</span> <span className="font-mono font-semibold">$0.19</span></div>
                </div>
              </div>
            </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
            <div className="text-3xl font-bold mb-2">$50/day</div>
            <div className="text-emerald-100 text-sm mb-3">Starter Campaign</div>
            <ul className="space-y-2 text-sm">
              <li>• Focus on 2-3 prime time slots</li>
              <li>• Single venue type initially</li>
              <li>• 6-8 hours of coverage</li>
              <li>• Test creative + audience fit</li>
              <li>• $1,500/month investment</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
            <div className="text-3xl font-bold mb-2">$100/day</div>
            <div className="text-emerald-100 text-sm mb-3">Standard Campaign</div>
            <ul className="space-y-2 text-sm">
              <li>• Multiple venue types</li>
              <li>• All-day coverage at key spots</li>
              <li>• 10-16 hours of coverage</li>
              <li>• A/B test messaging</li>
              <li>• $3,000/month investment</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
            <div className="text-3xl font-bold mb-2">$200+/day</div>
            <div className="text-emerald-100 text-sm mb-3">Aggressive Campaign</div>
            <ul className="space-y-2 text-sm">
              <li>• Full journey coverage</li>
              <li>• Multiple board locations</li>
              <li>• 16-24 hours of coverage</li>
              <li>• Sequential messaging</li>
              <li>• $6,000+/month investment</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h4 className="font-bold text-lg mb-4">Recommended Spend Allocation by Persona</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-2">First-Time Buyer ($75/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 40% - Gym + Coffee (7-9 AM)</li>
                <li>• 30% - Commute billboards (5-7 PM)</li>
                <li>• 30% - Grocery + Mall (6-9 PM)</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Move-Up Buyer ($100/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 35% - School zones (7:45 AM, 3:30 PM)</li>
                <li>• 35% - Sports facilities (5-8 PM)</li>
                <li>• 30% - Weekend grocery stores</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Refinance ($60/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 50% - Gas stations (peak commute)</li>
                <li>• 30% - Highway billboards</li>
                <li>• 20% - Gym screens</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Cash-Out Refi ($100/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 60% - Home Depot/Lowe&apos;s (weekends)</li>
                <li>• 25% - Grocery stores</li>
                <li>• 15% - Commute billboards</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">HELOC ($80/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 50% - Hardware stores</li>
                <li>• 30% - Coffee shops (business areas)</li>
                <li>• 20% - Premium venues</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">VA Loan ($75/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 40% - Near military bases</li>
                <li>• 30% - Gyms (early AM)</li>
                <li>• 30% - Grocery + casual dining</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="font-semibold mb-2">Reverse Mortgage ($90/day):</div>
              <ul className="space-y-1 text-emerald-100">
                <li>• 35% - Medical centers + pharmacies</li>
                <li>• 35% - Grocery stores (morning hours)</li>
                <li>• 30% - Banks + casual dining (early bird)</li>
              </ul>
            </div>
          </div>
        </div>
          </>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#FF6633] to-[#FFC238] border border-[#FFC238]/30 rounded-2xl shadow-2xl p-8 mt-6 text-white">
        <button
          onClick={() => setShowScience(!showScience)}
          className="w-full flex items-center justify-between text-left mb-6"
        >
          <h3 className="text-2xl font-bold">🧠 The Science Behind These Recommendations</h3>
          <span className="text-3xl">{showScience ? '−' : '+'}</span>
        </button>

        {showScience && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">⏱️</span> Attention Span Reality
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Highway billboards:</strong> 3-5 seconds at 60 mph (88 feet/second)</li>
                <li><strong>Surface streets:</strong> 5-8 seconds at 25-45 mph</li>
                <li><strong>Pedestrian/urban:</strong> 10+ seconds when walking</li>
                <li><strong>71%</strong> of drivers actively look at billboards</li>
                <li><strong>86%</strong> ad recall rate (highest of all media)</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🔢</span> The 7-Word Rule (Science)
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Miller&apos;s Law:</strong> Working memory holds 7±2 chunks</li>
                <li><strong>Reading speed:</strong> 1-2 words/second while driving</li>
                <li><strong>60% recall DROP</strong> when exceeding 10 words</li>
                <li><strong>Industry standard:</strong> 6 seconds to read message</li>
                <li><strong>Letter height formula:</strong> 1 inch = 10 feet readability</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🧠</span> Mere Exposure Effect
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Robert Zajonc (1968):</strong> Repeated exposure = preference</li>
                <li><strong>5-7 exposures</strong> needed for unaided brand recall</li>
                <li><strong>Works subconsciously</strong> - no need to remember seeing it</li>
                <li><strong>Cognitive fluency:</strong> Familiar = easier to process = liked</li>
                <li><strong>Commuters see billboards 10-20x/month</strong> = compounds</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">💰</span> ROI & Performance Data
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong>497% average ROI</strong> (OAAA research)</li>
                <li><strong>$6 return per $1 spent</strong> on billboards</li>
                <li><strong>$2-7 CPM</strong> (lowest cost per thousand)</li>
                <li><strong>72%</strong> of viewers shop on way home</li>
                <li><strong>80%</strong> research company after seeing OOH ad</li>
              </ul>
            </div>

            <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Design Science
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Typography:</div>
                  <ul className="space-y-1">
                    <li>✅ Sans-serif ONLY (Helvetica, Arial)</li>
                    <li>✅ Bold weights (700-900)</li>
                    <li>✅ 50+ inch letters for highway</li>
                    <li>❌ Script/cursive (blur at distance)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Color Contrast:</div>
                  <ul className="space-y-1">
                    <li>✅ Black on yellow (highest visibility)</li>
                    <li>✅ White on dark blue/black</li>
                    <li>✅ 5:1 minimum contrast ratio</li>
                    <li>❌ Low contrast (70% visibility loss)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Imagery:</div>
                  <ul className="space-y-1">
                    <li>✅ Single dominant image</li>
                    <li>✅ Logo 15-20% of space</li>
                    <li>✅ One clear message</li>
                    <li>❌ Multiple elements (45% lower recall)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Context Psychology (Why Location Matters)
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Gas Stations:</div>
                  <p className="mb-2">Most captive audience (3-5 min). Watching costs = financial stress context = 3x more receptive to savings messages.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Hardware Stores:</div>
                  <p className="mb-2">Literally shopping for home projects = perfect context for cash-out refi/HELOC. Multiple touchpoints per visit.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Gyms:</div>
                  <p className="mb-2">Achievement mindset + endorphins = positive brand associations. 45-90 min dwell = 2-4 exposures per visit.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-purple-200">Grocery Stores:</div>
                  <p className="mb-2">Domestic mindset = thinking about home/family. 30-60 min = multiple exposures trigger mere exposure effect in single visit.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-5">
            <h4 className="font-bold text-lg mb-3">⚡ Critical Success Factors</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-bold mb-2">NEVER Exceed:</div>
                <ul className="space-y-1">
                  <li>• 7 words (highway/driving)</li>
                  <li>• 10 words (any context)</li>
                  <li>• Multiple focal points</li>
                  <li>• Small fonts (&lt;30 inches)</li>
                </ul>
              </div>
              <div>
                <div className="font-bold mb-2">ALWAYS Include:</div>
                <ul className="space-y-1">
                  <li>• High contrast (5:1+ ratio)</li>
                  <li>• Bold sans-serif fonts</li>
                  <li>• Single clear message</li>
                  <li>• One dominant image</li>
                </ul>
              </div>
              <div>
                <div className="font-bold mb-2">TRUST The Science:</div>
                <ul className="space-y-1">
                  <li>• Repetition builds preference</li>
                  <li>• Familiarity = trust</li>
                  <li>• Context amplifies message</li>
                  <li>• Simple wins every time</li>
                </ul>
              </div>
            </div>
          </div>
        </>
        )}
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 mt-6">
        <button
          onClick={() => setShowProduction(!showProduction)}
          className="w-full flex items-center justify-between text-left mb-6"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Video className="w-6 h-6 text-[#375CFB]" />
            Production Priorities & File Delivery
          </h3>
          <span className="text-2xl text-[#375CFB]">{showProduction ? '−' : '+'}</span>
        </button>

        {showProduction && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-4">Production Priorities</h4>
              <div className="space-y-4 text-sm">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="font-bold text-indigo-900 mb-2">Phase 1: Core Assets (Must Have)</div>
                  <ul className="space-y-1 text-indigo-800">
                    <li>• 1920x1080 horizontal @ 30 seconds (video)</li>
                    <li>• 1080x1920 vertical @ 15 seconds (video)</li>
                    <li>• Static frame versions of both</li>
                    <li>• 3-5 message variations per persona</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-bold text-blue-900 mb-2">Phase 2: Optimizations</div>
                  <ul className="space-y-1 text-blue-800">
                    <li>• 6-second billboard cuts</li>
                    <li>• 8-second quick venue cuts</li>
                    <li>• Venue-specific message versions</li>
                    <li>• A/B test creative variations</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-purple-900 mb-2">Phase 3: Advanced</div>
                  <ul className="space-y-1 text-purple-800">
                    <li>• Sequential storytelling (Ad 1→2→3)</li>
                    <li>• Ultra-wide 1400x400 for specialty</li>
                    <li>• Custom 1280x720 versions</li>
                    <li>• Daypart-specific creative</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-4">File Delivery Checklist</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-bold text-slate-900 mb-1">Video Specs:</div>
                  <ul className="text-slate-700 space-y-0.5">
                    <li>• Format: MP4 (H.264 codec)</li>
                    <li>• Bitrate: 5-10 Mbps minimum</li>
                    <li>• Frame rate: 30fps</li>
                    <li>• Audio: 44.1kHz stereo (even if silent)</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-bold text-slate-900 mb-1">Static Image Specs:</div>
                  <ul className="text-slate-700 space-y-0.5">
                    <li>• Format: JPG or PNG</li>
                    <li>• Resolution: Exact pixel dimensions</li>
                    <li>• Color space: sRGB</li>
                    <li>• File size: Under 5MB per image</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-bold text-slate-900 mb-1">Design for Sound-Off:</div>
                  <ul className="text-slate-700 space-y-0.5">
                    <li>• Burned-in captions/text overlays</li>
                    <li>• Visual hierarchy that works silent</li>
                    <li>• Motion graphics convey message</li>
                    <li>• Don&apos;t rely on audio to communicate</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-600">
                  <div className="font-bold text-amber-900 mb-1">⚠️ CAASie Approval Tips:</div>
                  <ul className="text-amber-800 space-y-0.5 text-xs">
                    <li>• Keep messaging direct and clear</li>
                    <li>• Avoid overly creative/abstract concepts</li>
                    <li>• Include clear offer/CTA</li>
                    <li>• Use compliant disclosures</li>
                    <li>• Have alternate versions ready</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#0c39c8] to-[#021964] border border-[#375CFB]/30 rounded-2xl shadow-2xl p-8 mt-6 text-white">
        <button
          onClick={() => setShowImplementation(!showImplementation)}
          className="w-full flex items-center justify-between text-left mb-6"
        >
          <h3 className="text-xl font-bold">📋 Implementation Tips & Campaign Workflow</h3>
          <span className="text-3xl">{showImplementation ? '−' : '+'}</span>
        </button>

        {showImplementation && (
          <>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-lg">Campaign Setup Workflow:</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">1.</span>
                <span>Choose your persona and study their journey map</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">2.</span>
                <span>Produce core creative assets (Phase 1 priority)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">3.</span>
                <span>Upload to CAASie and submit for approval (2-24 hours)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">4.</span>
                <span>Use map tool to select boards matching journey stops</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">5.</span>
                <span>Set hourly schedules based on persona activity times</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">6.</span>
                <span>Configure budget pacing (hourly or daily limits)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">7.</span>
                <span>Launch and monitor real-time analytics for 3-7 days</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-emerald-300">8.</span>
                <span>Optimize based on play data and engagement</span>
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Testing Strategy:</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="font-bold mb-1">Week 1: Baseline Test</div>
                <div className="text-blue-100">Run single venue type at single time slot. Measure cost per play, impressions, and establish baseline.</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="font-bold mb-1">Week 2: Expansion</div>
                <div className="text-blue-100">Add 2nd venue type and 2nd time slot. Compare performance across venues and times.</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="font-bold mb-1">Week 3: Message Testing</div>
                <div className="text-blue-100">A/B test 2-3 message variations at best-performing venues. Track which copy resonates.</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="font-bold mb-1">Week 4+: Optimization</div>
                <div className="text-blue-100">Scale budget to winners. Kill underperformers. Add sequential messaging across journey.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">Pro Tips for Maximum ROI:</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <span><strong>Geofence ruthlessly:</strong> Don&apos;t waste plays on wrong neighborhoods. Hand-pick every board location.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <span><strong>Schedule by hour:</strong> Never run 24/7. Your persona sleeps - so should your ads.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <span><strong>Context is king:</strong> Same person, different message at gym vs. grocery vs. gas station.</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <span><strong>Layer your story:</strong> If they see 3-4 touchpoints/day, build a narrative arc across their journey.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span><strong>Track attribution:</strong> Use unique URLs or QR codes per venue to track which locations convert.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <span><strong>Refresh creative monthly:</strong> OOH viewers see the same boards repeatedly. Rotate messages to avoid ad blindness.</span>
              </li>
            </ul>
          </div>
        </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">📊 Research-backed recommendations based on neuroscience, behavioral psychology, and industry studies</p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Rebel iQ. All Rights Reserved. Confidential and Proprietary.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PersonaJourneyMap;
