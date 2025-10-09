
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoginModal } from '@/components/auth/LoginModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, MapPin, Star, Users, Trophy, Bell, Settings, Plus, Heart, Share2, Camera, Mic, Globe, Zap, Brain, Gamepad2, Gift, Award, TrendingUp, BarChart3, CalendarDays, Target, Search, Filter, Download, Grid, List, Ticket } from 'lucide-react';
import { useLocation } from '@/contexts/LocationContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { TicketCard } from '@/components/tickets/TicketCard';
import { TicketsStats } from '@/components/tickets/TicketsStats';
import { WishlistSection } from '@/components/dashboard/WishlistSection';
import { CouponSection } from '@/components/dashboard/CouponSection';
import { motion } from 'framer-motion';

interface UserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  interests: string[];
  eventsAttended: number;
  points: number;
  level: number;
  badges: string[];
  joinedDate: string;
}

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  // Get initial tab from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const [activeTab, setActiveTab] = useState(urlParams.get('tab') || 'overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { city } = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newUrl = `/dashboard${value !== 'overview' ? `?tab=${value}` : ''}`;
    window.history.pushState(null, '', newUrl);
  };

  useEffect(() => {
    // Check if user is logged in (this would normally check auth state)
    const storedUser = localStorage.getItem('seatzap-user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  // Watch for URL param changes to update active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [window.location.search]);

  const handleLogin = (user: any) => {
    const newUser: UserData = {
      id: user.id || '1',
      name: user.name || 'Alex Johnson',
      email: user.email,
      avatar: user.avatar || '/placeholder.svg',
      bio: 'Event enthusiast and community builder',
      location: city,
      interests: ['Music', 'Technology', 'Networking'],
      eventsAttended: 24,
      points: 2450,
      level: 5,
      badges: ['Early Bird', 'Social Butterfly', 'Tech Enthusiast', 'VIP Member'],
      joinedDate: '2024-01-15'
    };
    
    setUserData(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('seatzap-user', JSON.stringify(newUser));
    setShowLoginModal(false);
    toast.success(`Welcome back, ${newUser.name}!`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('seatzap-user');
    toast.success('Logged out successfully');
  };

  const upcomingEvents = [
    {
      id: '1',
      title: 'Tech Conference 2025',
      date: '2025-02-15',
      time: '09:00 AM',
      location: 'Mumbai Convention Center',
      category: 'Technology',
      image: '/placeholder.svg',
      price: 'Free',
      attending: true
    },
    {
      id: '2', 
      title: 'Jazz Night Live',
      date: '2025-02-20',
      time: '08:00 PM',
      location: 'Blue Note Cafe',
      category: 'Music',
      image: '/placeholder.svg',
      price: '₹1,200',
      attending: false
    }
  ];

  const recommendations = [
    {
      id: '3',
      title: 'Digital Marketing Workshop',
      date: '2025-02-25',
      location: 'Online',
      category: 'Business',
      matchScore: 95,
      reason: 'Based on your tech interests'
    },
    {
      id: '4',
      title: 'Startup Networking Mixer',
      date: '2025-03-01',
      location: 'Bangalore',
      category: 'Networking',
      matchScore: 88,
      reason: 'Perfect for expanding your network'
    }
  ];

  // Mock ticket data for dashboard
  const mockTickets = [
    {
      id: 'T001',
      eventName: 'Strums N Hums(Theera Ulaa) - Ep 2 Singalong',
      eventDate: '2025-08-31',
      eventTime: '18:00',
      venue: 'Music Hall',
      city: 'Chennai',
      ticketType: 'VIP',
      price: 1500,
      status: 'confirmed' as const,
      qrCode: 'QR001',
      bookedOn: '2025-08-19',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 'T002',
      eventName: 'Jazz Night Live',
      eventDate: '2025-09-15',
      eventTime: '20:00',
      venue: 'Blue Note Club',
      city: 'Mumbai',
      ticketType: 'Premium',
      price: 2000,
      status: 'confirmed' as const,
      qrCode: 'QR002',
      bookedOn: '2025-08-20',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=300&fit=crop'
    },
    {
      id: 'T003',
      eventName: 'Comedy Central Live',
      eventDate: '2025-07-20',
      eventTime: '19:30',
      venue: 'Laugh Factory',
      city: 'Bangalore',
      ticketType: 'Regular',
      price: 800,
      status: 'cancelled' as const,
      qrCode: 'QR003',
      bookedOn: '2025-07-15',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    }
  ];

  const filteredTickets = mockTickets.filter(ticket => {
    return ticket.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
           ticket.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
           ticket.city.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calculate ticket stats
  const totalTickets = mockTickets.length;
  const upcomingTickets = mockTickets.filter(t => new Date(t.eventDate) > new Date() && t.status === 'confirmed').length;
  const totalSpent = mockTickets.filter(t => t.status === 'confirmed').reduce((sum, t) => sum + t.price, 0);
  const favoriteVenue = 'Music Hall';

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-display-lg font-bold text-foreground">
                Welcome to SeatZap
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join events, host your own, connect with others!
              </p>
              <p className="text-base text-muted-foreground">
                Discover amazing events in {city} and beyond. Build your network, learn new skills, and create unforgettable memories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowLoginModal(true)}
                size="lg"
                className="btn-primary text-lg px-8 py-6 font-semibold"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => setShowLoginModal(true)}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 font-semibold border-2"
              >
                Sign Up
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="clean-card p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Discover Events</h3>
                <p className="text-sm text-muted-foreground">Find events tailored to your interests</p>
              </Card>
              <Card className="clean-card p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Connect</h3>
                <p className="text-sm text-muted-foreground">Meet like-minded people at events</p>
              </Card>
              <Card className="clean-card p-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Earn Rewards</h3>
                <p className="text-sm text-muted-foreground">Get points and badges for participation</p>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
        
        <LoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* User Profile Header */}
        <div className="clean-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img 
                src={userData?.avatar || '/placeholder.svg'} 
                alt={userData?.name}
                className="w-24 h-24 rounded-full border-4 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {userData?.level}
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{userData?.name}</h1>
                  <p className="text-muted-foreground">{userData?.bio}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {userData?.location}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => navigate('/profile-edit')}>
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {(userData?.interests ?? []).map((interest) => (
                  <Badge key={interest} variant="secondary">{interest}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userData?.eventsAttended}</div>
              <div className="text-sm text-muted-foreground">Events Attended</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userData?.points}</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userData?.badges?.length ?? 0}</div>
              <div className="text-sm text-muted-foreground">Badges</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Level {userData?.level}</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="coupons">My Coupons</TabsTrigger>
            <TabsTrigger value="profile">Edit Profile</TabsTrigger>
            <TabsTrigger value="events">My Events</TabsTrigger>
            <TabsTrigger value="recommendations">For You</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="networking">Network</TabsTrigger>
            <TabsTrigger value="achievements">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card className="clean-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Browse Events
                  </Button>
                  <Button className="w-full justify-start" variant="outline" onClick={() => handleTabChange('wishlist')}>
                    <Heart className="h-4 w-4 mr-2" />
                    View Wishlist
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Invite Friends
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Gift className="h-4 w-4 mr-2" />
                    Redeem Points
                  </Button>
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card className="clean-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    AI Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Event Engagement</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Network Growth</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-foreground font-medium">💡 Insight</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      You're most active at tech events on weekends. Consider exploring music events for variety!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Gamification */}
              <Card className="clean-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                    Level Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Level {userData?.level} → {(userData?.level || 0) + 1}</span>
                      <span className="font-medium">750/1000 XP</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    {(userData?.badges ?? []).slice(0, 3).map((badge) => (
                      <div key={badge} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{badge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <Card className="clean-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(upcomingEvents || []).map((event) => (
                    <div key={event.id} className="flex gap-4 p-4 border rounded-lg clean-interactive">
                      <img src={event.image} alt={event.title} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1 space-y-1">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                          <Clock className="h-3 w-3 ml-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <Badge variant={event.attending ? "default" : "outline"}>
                            {event.attending ? "Attending" : event.price}
                          </Badge>
                          <Button size="sm" variant="ghost">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">My Tickets</h2>
                <p className="text-muted-foreground">Manage all your event tickets</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TicketsStats
              totalTickets={totalTickets}
              upcomingEvents={upcomingTickets}
              totalSpent={totalSpent}
              favoriteVenue={favoriteVenue}
            />

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tickets by event, venue, or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export All
                </Button>
              </div>
            </div>

            {/* Tickets List */}
            {filteredTickets.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🎫</div>
                <h3 className="text-xl font-semibold mb-2">No tickets found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery ? 'Try adjusting your search terms.' : 'You haven\'t booked any tickets yet.'}
                </p>
                <Button onClick={() => navigate('/events')}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Browse Events
                </Button>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid gap-6 md:grid-cols-1 lg:grid-cols-2' : 'space-y-4'}>
                {(filteredTickets || []).map((ticket, index) => (
                  <TicketCard key={ticket.id} ticket={ticket} index={index} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <WishlistSection />
          </TabsContent>

          {/* Coupons Tab */}
          <TabsContent value="coupons">
            <CouponSection />
          </TabsContent>

          {/* Edit Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="clean-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Edit Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative">
                    <img 
                      src={userData?.avatar || '/placeholder.svg'} 
                      alt={userData?.name}
                      className="w-24 h-24 rounded-full border-4 border-primary/20"
                    />
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 space-y-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <Input defaultValue={userData?.name} className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <Input defaultValue={userData?.email} className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Phone</label>
                        <Input defaultValue="+91 9739714073" className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Location</label>
                        <Input defaultValue={userData?.location} className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground">Bio</label>
                      <Input defaultValue={userData?.bio} className="mt-1" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground">Interests</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(userData?.interests ?? []).map((interest) => (
                          <Badge key={interest} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                            {interest}
                          </Badge>
                        ))}
                        <Button variant="outline" size="sm">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Interest
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground">Badges</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(userData?.badges ?? []).map((badge) => (
                          <Badge key={badge} variant="outline" className="cursor-pointer">
                            <Award className="h-3 w-3 mr-1" />
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button onClick={() => toast.success('Profile updated successfully!')}>
                        Save Changes
                      </Button>
                      <Button variant="outline">Cancel</Button>
                      <Button variant="outline" onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card className="clean-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  AI-Powered Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(recommendations || []).map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg space-y-3 clean-interactive">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <Badge variant="secondary">{event.matchScore}% match</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                        <MapPin className="h-3 w-3 ml-2" />
                        {event.location}
                      </div>
                      <p className="text-sm text-muted-foreground">{event.reason}</p>
                      <Button size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tab contents would go here */}
          <TabsContent value="events">
            <Card className="clean-card">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">My Events</h3>
                <p className="text-muted-foreground mb-4">View and manage your event bookings</p>
                <Button>View All Events</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card className="clean-card">
              <CardContent className="p-8 text-center">
                <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Event Calendar</h3>
                <p className="text-muted-foreground mb-4">Interactive calendar view of your events</p>
                <Button>Open Calendar</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="networking">
            <Card className="clean-card">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Your Network</h3>
                <p className="text-muted-foreground mb-4">Connect with people from events you've attended</p>
                <Button>Explore Network</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="clean-card">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Achievements & Rewards</h3>
                <p className="text-muted-foreground mb-4">Track your progress and redeem rewards</p>
                <Button>View Rewards</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Host Event CTA */}
        <Card className="clean-card bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ready to Host Your Own Event?</h3>
              <p className="text-muted-foreground">
                Share your passion with the world. Create memorable experiences and build your community.
              </p>
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6 font-semibold"
                onClick={() => navigate('/publish')}
              >
                <Plus className="h-5 w-5 mr-2" />
                Host an Event
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
