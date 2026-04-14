import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import SectionNav from '../components/SectionNav';
import { Eye, Heart } from 'lucide-react';

const Stats = () => {
  const [pageViews, setPageViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [githubData, setGithubData] = useState({
    followers: 0,
    public_repos: 0,
    following: 0,
    hireable: false
  });
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    // Increment page views on EVERY visit
    const currentViews = parseInt(localStorage.getItem('portfolioPageViews') || '24');
    const newViews = currentViews + 1;
    localStorage.setItem('portfolioPageViews', newViews.toString());
    setPageViews(newViews);

    // Initialize likes
    const currentLikes = parseInt(localStorage.getItem('portfolioLikes') || '24');
    setLikes(currentLikes);

    // Check if user has already liked
    const userHasLiked = localStorage.getItem('portfolioUserHasLiked') === 'true';
    setHasLiked(userHasLiked);

    // Fetch GitHub Data
    const fetchGithubData = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        // Fetch User Stats (Fallback to unauthenticated if no token)
        const userUrl = token ? 'https://api.github.com/user' : 'https://api.github.com/users/afdhruval';
        const headers = token ? { Authorization: `token ${token}` } : {};

        const response = await fetch(userUrl, { headers });
        const data = await response.json();
        setGithubData({
          followers: data.followers || 0,
          public_repos: data.public_repos || 0,
          following: data.following || 0,
          hireable: data.hireable || false
        });

        // Fetch Contributions Graph (Requires Token for GraphQL)
        if (token) {
          const query = `
            query {
              viewer {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                        weekday
                        contributionLevel
                      }
                    }
                  }
                }
              }
            }
          `;
          const graphResponse = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
          });
          const graphData = await graphResponse.json();
          if (graphData?.data?.viewer?.contributionsCollection?.contributionCalendar) {
            const calendar = graphData.data.viewer.contributionsCollection.contributionCalendar;
            setTotalContributions(calendar.totalContributions);
            setContributions(calendar.weeks);
          }
        } else {
          console.warn("VITE_GITHUB_TOKEN is missing in .env file. Contributions heatmap cannot be generated.");
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubData();
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      localStorage.setItem('portfolioLikes', newLikes.toString());
      localStorage.setItem('portfolioUserHasLiked', 'true');
      setHasLiked(true);
    }
  };

  const getLevelMap = (levelData) => {
    switch(levelData) {
        case 'NONE': return 0;
        case 'FIRST_QUARTILE': return 1;
        case 'SECOND_QUARTILE': return 2;
        case 'THIRD_QUARTILE': return 3;
        case 'FOURTH_QUARTILE': return 4;
        default: return 0;
    }
  };

  const getLevelColor = (level) => {
    const colors = [
      'bg-gray-800',
      'bg-green-900',
      'bg-green-700',
      'bg-green-500',
      'bg-green-400',
    ];
    return colors[level];
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">About this portfolio</h1>
        <p className="text-gray-soft mb-12">Insights and metrics about this portfolio website</p>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card hover={false} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-purple-400">
              <Eye size={24} />
              <h3 className="text-lg font-medium">Total Views</h3>
            </div>
            <p className="text-6xl font-bold text-purple-500 mb-2">{pageViews.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Unique page visits since Mar-2025</p>
            <p className="text-xs text-green-500 mt-2"></p>
          </Card>

          <Card hover={false} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-pink-400">
              <Heart size={24} />
              <h3 className="text-lg font-medium">Appreciation Count</h3>
            </div>
            <p className="text-6xl font-bold text-pink-500 mb-2">{likes.toLocaleString()}</p>
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full transition-all ${hasLiked
                  ? 'bg-pink-900/20 text-pink-400 cursor-not-allowed'
                  : 'bg-pink-600 hover:bg-pink-500 text-white cursor-pointer'
                }`}
            >
              <Heart size={16} className={hasLiked ? 'fill-pink-400' : ''} />
              <span className="text-sm">{hasLiked ? 'Thank you!' : 'Like this portfolio'}</span>
            </button>
          </Card>
        </div>

        {/* GitHub Stats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">GitHub Stats</h2>
          <p className="text-gray-soft mb-8">Insights and metrics about my GitHub profile</p>

          {/* Contribution Heatmap */}
          <Card hover={false} className="mb-6 overflow-x-auto">
            <div className="flex gap-1 mb-4">
              <div className="flex flex-col gap-1 text-xs text-gray-500 mr-2">
                <div className="h-3"></div>
                <div className="h-3 flex items-center">Mon</div>
                <div className="h-3"></div>
                <div className="h-3 flex items-center">Wed</div>
                <div className="h-3"></div>
                <div className="h-3 flex items-center">Fri</div>
                <div className="h-3"></div>
              </div>
              
              {contributions && contributions.length > 0 ? contributions.map((week, wIndex) => {
                // Determine if we should show month label roughly based on first day parsing
                const firstDayObj = week.contributionDays[0];
                let monthLabel = '';
                if (firstDayObj) {
                  const d = new Date(firstDayObj.date);
                  // Approximate to show month label when 1st is in the week
                  if (d.getDate() <= 7) {
                    monthLabel = d.toLocaleString('default', { month: 'short' });
                  }
                }

                return (
                  <div key={wIndex} className="flex flex-col gap-1">
                    <div className="text-xs text-gray-500 h-3 flex items-end justify-center">{monthLabel}</div>
                    {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                      const day = week.contributionDays.find(d => d.weekday === dayIndex);
                      return (
                        <div
                          key={`${wIndex}-${dayIndex}`}
                          title={day ? `${day.contributionCount} contributions on ${day.date}` : ''}
                          className={`w-3 h-3 rounded-sm ${day ? getLevelColor(getLevelMap(day.contributionLevel)) : 'bg-transparent'}`}
                        />
                      );
                    })}
                  </div>
                );
              }) : (
                <div className="w-full text-center text-gray-500 text-sm py-8">
                  {import.meta.env.VITE_GITHUB_TOKEN ? "Loading contributions..." : "Please configure VITE_GITHUB_TOKEN to see contribution graph"}
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-500">{totalContributions} contributions in the last year</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} />
                  ))}
                </div>
                <span className="text-gray-500">More</span>
              </div>
            </div>
          </Card>

          {/* GitHub Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card hover={false} className="text-center">
              <p className="text-sm text-gray-500 mb-2">Hireable</p>
              <p className="text-3xl font-bold text-green-500">{githubData.hireable ? 'Yes' : 'Yes'}</p>
            </Card>
            <Card hover={false} className="text-center">
              <p className="text-sm text-gray-500 mb-2">Total Public Repositories</p>
              <p className="text-3xl font-bold text-white">{githubData.public_repos}</p>
            </Card>
            <Card hover={false} className="text-center">
              <p className="text-sm text-gray-500 mb-2">Followers</p>
              <p className="text-3xl font-bold text-white">{githubData.followers}</p>
            </Card>
            <Card hover={false} className="text-center">
              <p className="text-sm text-gray-500 mb-2">Following</p>
              <p className="text-3xl font-bold text-white">{githubData.following}</p>
            </Card>
          </div>
        </div>

        <SectionNav prev={{ name: 'Contact', path: '/contact' }} next={{ name: 'Home', path: '/' }} />
      </div>
    </PageTransition>
  );
};

export default Stats;
