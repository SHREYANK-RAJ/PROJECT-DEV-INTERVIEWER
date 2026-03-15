import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Layers, Server, Network, Braces, FileType, Lightbulb } from 'lucide-react';
import { topics, interviewTips } from '../mockData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Server,
  Network,
  Braces,
  FileType,
};

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Ace Your Tech Interview
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A community-driven platform for sharing real interview questions,
            solutions, and tips from developers who've been there. Learn from
            thousands of interview experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Browse by Tech Topics
              </h2>
              <span className="text-sm text-gray-500">
                {topics.length} topics available
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic) => {
                const Icon = iconMap[topic.icon];
                return (
                  <Link
                    key={topic.id}
                    to={`/topic/${topic.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${topic.color} p-3 rounded-lg text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {topic.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {topic.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            {topic.questionCount} questions
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-lg p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Interview Tips
                </h3>
              </div>

              <div className="space-y-4">
                {interviewTips.map((tip) => (
                  <div
                    key={tip.id}
                    className="bg-white rounded-lg p-4 shadow-sm border border-blue-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {tip.title}
                      </h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {tip.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tip.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
