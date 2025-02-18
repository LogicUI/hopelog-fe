import React from "react";
import Image from "next/image";
import {
  MoodTrendsChartSVG,
  BullsEyeSolidSVG,
  ChartLineSolidSVG,
  ChartPieSolidSVG,
} from "../assets/assets";
import { Link as ScrollLink } from "react-scroll";

const AnalysisLanding = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-16 px-16 md:px-0 text-white">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          The Power of AI in Your Journaling Practice
        </h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Let artificial intelligence enhance your self-reflection and personal
          growth journey
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-between h-full space-y-8">
            <div className="bg-white rounded-lg p-8 text-slate-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Image
                  src={ChartPieSolidSVG}
                  alt="Sentiment Analysis Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-center md:text-left text-xl font-semibold">
                    Sentiment Analysis
                  </h3>
                  <p className="text-center md:text-left text-gray-600 mt-2">
                    Advanced AI algorithms analyze your entries to track
                    emotional patterns and provide meaningful insights about
                    your mental well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-slate-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Image
                  src={BullsEyeSolidSVG}
                  alt="Goal Tracking Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-center md:text-left text-xl font-semibold">
                    Goal Tracking
                  </h3>
                  <p className="text-center md:text-left text-gray-600 mt-2">
                    AI-powered goal detection helps you identify and track
                    personal objectives mentioned in your journal entries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-slate-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Image
                  src={ChartLineSolidSVG}
                  alt="Smart Suggestions Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-center md:text-left text-xl font-semibold">
                    Smart Suggestions
                  </h3>
                  <p className="text-center md:text-left text-gray-600 mt-2">
                    Receive personalized writing prompts and insights based on
                    your journaling patterns and emotional state.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-slate-900 shadow-lg hover:shadow-xl transition-shadow h-full">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">Mood Trends</h3>
              <span className="text-gray-600">Last 7 Days</span>
            </div>

            <div className="mb-8">
              <Image
                src={MoodTrendsChartSVG}
                alt="Mood Trends Chart"
                width={800}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-gray-600">Positive Days</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12K</div>
                <div className="text-gray-600">Words Insights</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24</div>
                <div className="text-gray-600">Insights Generated</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <ScrollLink
            style={{ cursor: "pointer" }}
            to="hero-landing"
            smooth={true}
            duration={500}
            className="bg-[#3B3B52] hover:bg-[#4a4a64] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Start Your AI Journey
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default AnalysisLanding;
