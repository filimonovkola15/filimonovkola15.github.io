// Sound Delivery Website
class SoundDeliveryApp {
    constructor() {
        this.init();
    }

    init() {
        console.log('Initializing SoundDeliveryApp...');
        
        this.setupNavigation();
        this.setupFAQ();
        this.setupMobileMenu();
        this.setupAnalytics();
        this.setupSmoothScrolling();
        this.setupSearchFilters();
        this.setupInteractiveElements();
        this.setupAnimations();
        this.setupPhoneAnimations();
        this.setupServiceIcons();
        this.setupAnalyticsModule();
        
        console.log('SoundDeliveryApp initialization complete');
    }

    // Navigation
    setupNavigation() {
        const nav = document.querySelector('.navigation');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Smooth scroll for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navigation background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
                nav.style.boxShadow = 'none';
            }
        });
    }

    // Mobile Menu
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navActions = document.querySelector('.nav-actions');

        if (mobileToggle && navMenu && navActions) {
            // Create overlay if it doesn't exist
            let overlay = document.querySelector('.mobile-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-overlay';
                document.body.appendChild(overlay);
            }

            const toggleMenu = () => {
                const isActive = mobileToggle.classList.contains('active');
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                navActions.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                // Update ARIA attributes
                mobileToggle.setAttribute('aria-expanded', !isActive);
                mobileToggle.setAttribute('aria-label', !isActive ? 'Закрыть мобильное меню' : 'Открыть мобильное меню');
            };

            const closeMenu = () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navActions.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                // Update ARIA attributes
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.setAttribute('aria-label', 'Открыть мобильное меню');
            };

            mobileToggle.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', closeMenu);

            // Close menu on nav link click
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        }
    }

    // FAQ Functionality
    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        });
    }

    // Analytics Chart
    setupAnalytics() {
        const chartCanvas = document.getElementById('analyticsChart');
        if (!chartCanvas) {
            console.warn('Analytics chart canvas not found');
            return;
        }

        try {
            const ctx = chartCanvas.getContext('2d');
            
            // Check if Chart.js is loaded
            if (typeof Chart === 'undefined') {
                console.error('Chart.js is not loaded');
                return;
            }

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(102, 102, 204, 0.8)');
        gradient.addColorStop(1, 'rgba(102, 102, 204, 0.1)');

        const chartData = {
            labels: [
                '2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25', '2024-01-26',
                '2024-01-27', '2024-01-28', '2024-01-29', '2024-01-30', '2024-01-31',
                '2024-02-01', '2024-02-02', '2024-02-03', '2024-02-04', '2024-02-05',
                '2024-02-06', '2024-02-07', '2024-02-08', '2024-02-09', '2024-02-10',
                '2024-02-11', '2024-02-12', '2024-02-13', '2024-02-14', '2024-02-15',
                '2024-02-16', '2024-02-17', '2024-02-18', '2024-02-19', '2024-02-20'
            ],
            datasets: [{
                label: 'Plays',
                data: [
                    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 7500, 8000,
                    8500, 7000, 6500, 7000, 7500, 8000, 8500, 9000, 6000, 25000,
                    20000, 18000, 15000, 12000, 10000, 8000, 8500, 9000, 9500, 9000
                ],
                borderColor: '#6666cc',
                backgroundColor: gradient,
                pointBackgroundColor: '#6666cc',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#8a8aff',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        };

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: true,
                        ticks: {
                            color: '#cccccc',
                            maxTicksLimit: 8
                        },
                        grid: {
                            color: 'rgba(102, 102, 204, 0.1)',
                            drawBorder: false
                        }
                    },
                    y: {
                        display: true,
                        ticks: {
                            color: '#cccccc',
                            callback: function(value) {
                                return value >= 1000 ? (value / 1000) + 'k' : value;
                            }
                        },
                        grid: {
                            color: 'rgba(102, 102, 204, 0.1)',
                            drawBorder: false
                        },
                        max: 30000
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                elements: {
                    point: {
                        hoverRadius: 8
                    }
                }
            }
        });

        // Animate stat bars
        this.animateStatBars();
        } catch (error) {
            console.error('Error creating chart:', error);
            // Fallback: hide chart container or show error message
            const chartContainer = chartCanvas.closest('.chart-container');
            if (chartContainer) {
                chartContainer.style.display = 'none';
            }
        }
    }

    // Animate Statistics Bars
    animateStatBars() {
        const statBars = document.querySelectorAll('.stat-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statFill = entry.target;
                    const targetWidth = statFill.style.width;
                    statFill.style.width = '0%';
                    
                    setTimeout(() => {
                        statFill.style.width = targetWidth;
                    }, 300);
                    
                    // Stop observing after animation
                    observer.unobserve(entry.target);
                }
            });
        });

        statBars.forEach(bar => observer.observe(bar));
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        // CTA button
        const ctaButton = document.querySelector('.cta-primary');
        
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('services').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }

    // Search and Filters
    setupSearchFilters() {
        const searchInput = document.querySelector('.search-input');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        // Search functionality
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performSearch(e.target.value);
                }, 300);
            });
        }

        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.filterContent(button.textContent);
            });
        });
    }

    // Search function
    performSearch(query) {
        if (typeof query !== 'string') {
            console.error('Search query must be a string');
            return;
        }
        
        console.log('Searching for:', query);
        // Simulate search functionality
        const releaseCards = document.querySelectorAll('.release-card');
        
        releaseCards.forEach(card => {
            try {
                const titleElement = card.querySelector('h4');
                const artistElement = card.querySelector('.artist-name');
                
                if (!titleElement || !artistElement) return;
                
                const title = titleElement.textContent.toLowerCase();
                const artist = artistElement.textContent.toLowerCase();
                const searchQuery = query.toLowerCase().trim();
                
                if (title.includes(searchQuery) || artist.includes(searchQuery) || searchQuery === '') {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            } catch (error) {
                console.error('Error in search:', error);
            }
        });
    }

    // Filter content
    filterContent(filter) {
        if (typeof filter !== 'string') {
            console.error('Filter must be a string');
            return;
        }
        
        console.log('Filtering by:', filter);
        // Simulate filter functionality
        const releaseCards = document.querySelectorAll('.release-card');
        
        releaseCards.forEach(card => {
            try {
                // For demo purposes, show all items
                card.style.display = 'flex';
                
                // Add visual feedback
                card.style.opacity = '0.5';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 200);
            } catch (error) {
                console.error('Error in filter:', error);
            }
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        console.log('Setting up interactive elements...');
        
        // Platform cards tilt effect - removed to avoid conflict with CSS hover

        // Service cards interaction - removed to avoid conflict with CSS hover

        // Dashboard cards interaction - removed to avoid conflict with CSS hover

        // Tracklist button functionality
        const tracklistBtn = document.querySelector('.tracklist-btn');
        if (tracklistBtn) {
            tracklistBtn.addEventListener('click', () => {
                this.showTracklist();
            });
        }

        // Download buttons
        const downloadBtns = document.querySelectorAll('.download-btn');
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadReport();
            });
        });

        // Withdraw button
        const withdrawBtn = document.querySelector('.withdraw-btn');
        if (withdrawBtn) {
            withdrawBtn.addEventListener('click', () => {
                this.requestWithdrawal();
            });
        }

        // Quick action buttons
        const actionBtns = document.querySelectorAll('.action-btn');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleQuickAction(btn);
            });
        });

        // New Analytics controls
        const periodOptions = document.querySelectorAll('.period-option');
        console.log('Found period options:', periodOptions.length);
        periodOptions.forEach((btn, index) => {
            console.log(`Adding event listener to period button ${index}:`, btn.textContent);
            btn.addEventListener('click', () => {
                console.log('Period button clicked:', btn.textContent);
                this.handlePeriodChange(btn);
            });
        });

        // Analytics tabs
        const statsTabs = document.querySelectorAll('.stats-tab');
        console.log('Found stats tabs:', statsTabs.length);
        statsTabs.forEach((tab, index) => {
            console.log(`Adding event listener to stats tab ${index}:`, tab.textContent);
            tab.addEventListener('click', () => {
                console.log('Stats tab clicked:', tab.textContent);
                this.handleStatsTabChange(tab);
            });
        });

        // Export button
        const exportBtn = document.querySelector('.export-button');
        console.log('Found export button:', !!exportBtn);
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                console.log('Export button clicked');
                this.exportAnalyticsData();
            });
        }

        // Activity feed interactions
        const activityItems = document.querySelectorAll('.activity-item');
        activityItems.forEach(item => {
            item.addEventListener('click', () => {
                this.showActivityDetails(item);
            });
        });

        // Balance amount hover effect
        const balanceAmount = document.querySelector('.balance-amount');
        if (balanceAmount) {
            balanceAmount.addEventListener('mouseenter', () => {
                this.animateBalance();
            });
        }
        
        console.log('Interactive elements setup complete');
    }

    // Handle quick action buttons
    handleQuickAction(button) {
        const action = button.querySelector('.action-btn-text').textContent;
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);

        // Show action notification
        this.showActionNotification(action);
    }

    // Handle period change in new analytics
    handlePeriodChange(button) {
        console.log('handlePeriodChange called with button:', button);
        
        const periodOptions = document.querySelectorAll('.period-option');
        periodOptions.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const period = parseInt(button.getAttribute('data-period'));
        console.log(`Period changed to: ${period} days`);
        
        if (!period) {
            console.error('Invalid period value:', button.getAttribute('data-period'));
            return;
        }
        
        // Show loading overlay
        this.showChartLoading();
        
        // Update chart data
        setTimeout(() => {
            console.log('Updating chart and metrics for period:', period);
            this.updateChartData(period);
            this.updateMetrics(period);
            this.hideChartLoading();
        }, 500);
    }

    // Handle stats tab change
    handleStatsTabChange(tab) {
        const statsTabs = document.querySelectorAll('.stats-tab');
        statsTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.getAttribute('data-tab');
        
        const tabPanels = document.querySelectorAll('.tab-panel');
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        const targetPanel = document.querySelector(`[data-panel="${tabName}"]`);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
        
        console.log(`Switched to tab: ${tabName}`);
    }

    // Show chart loading overlay
    showChartLoading() {
        const overlay = document.querySelector('.chart-overlay');
        if (overlay) {
            overlay.classList.add('visible');
        }
    }

    // Hide chart loading overlay
    hideChartLoading() {
        const overlay = document.querySelector('.chart-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
        }
    }



    // Update metrics display
    updateMetrics(period) {
        const data = {
            7: { plays: 16600, growth: '+23.5%', revenue: 664 },
            30: { plays: 80000, growth: '+18.7%', revenue: 3200 },
            90: { plays: 232000, growth: '+31.2%', revenue: 9280 }
        };
        
        const periodData = data[period] || data[7];
        const metricValues = document.querySelectorAll('.metric-value');
        
        if (metricValues[0]) {
            this.animateValue(metricValues[0], 0, periodData.plays, 1000);
        }
        if (metricValues[1]) {
            metricValues[1].textContent = periodData.growth;
        }
        if (metricValues[2]) {
            this.animateValue(metricValues[2], 0, periodData.revenue, 1000, ' ₽');
        }
    }

    // Show activity details
    showActivityDetails(item) {
        const title = item.querySelector('.activity-title').textContent;
        const description = item.querySelector('.activity-description').textContent;
        
        // Add selection effect
        item.style.transform = 'translateX(5px)';
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
        }, 300);

        console.log(`Activity clicked: ${title} - ${description}`);
    }

    // Animate balance on hover
    animateBalance() {
        const balanceAmount = document.querySelector('.balance-amount');
        const currentValue = parseInt(balanceAmount.textContent.replace(/[^\d]/g, ''));
        
        // Animate to random value and back
        const targetValue = Math.floor(Math.random() * 5000) + 1000;
        this.animateValueLegacy(balanceAmount, currentValue, targetValue, 500);
        
        setTimeout(() => {
            this.animateValueLegacy(balanceAmount, targetValue, currentValue, 500);
        }, 1000);
    }

    // Animate number value (legacy - kept for balance hover)
    animateValueLegacy(element, start, end, duration) {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current + ' ₽';
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Show action notification
    showActionNotification(action) {
        const notification = document.createElement('div');
        notification.textContent = `${action}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--accent-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Update analytics data
    updateAnalyticsData(period) {
        // Show loading state
        const chartLoading = document.querySelector('.chart-loading');
        const chartCanvas = document.querySelector('#analyticsChart');
        
        if (chartLoading && chartCanvas) {
            chartLoading.style.display = 'flex';
            chartCanvas.style.opacity = '0.3';
            
            setTimeout(() => {
                chartLoading.style.display = 'none';
                chartCanvas.style.opacity = '1';
                console.log(`Analytics updated for ${period} days`);
            }, 800);
        }
    }

    // Update analytics summary
    updateAnalyticsSummary(period) {
        const summaryValues = document.querySelectorAll('.summary-value.animate-counter');
        
        // Generate different data based on period (matching chart data)
        const data = {
            7: { plays: 16600, revenue: 664 },
            30: { plays: 80000, revenue: 3200 },
            90: { plays: 232000, revenue: 9280 }
        };
        
        const periodData = data[period] || data[7];
        
        summaryValues.forEach((value, index) => {
            if (index === 0) { // Plays
                this.animateValue(value, 0, periodData.plays, 1000);
            } else if (index === 1) { // Revenue
                this.animateValue(value, 0, periodData.revenue, 1000, ' ₽');
            }
        });
    }

    // Handle view toggle
    handleViewToggle(button) {
        const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
        viewToggleBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const viewType = button.getAttribute('data-view');
        
        // Hide all views
        const statsViews = document.querySelectorAll('.stats-view');
        statsViews.forEach(view => {
            view.classList.remove('active');
        });

        // Show selected view
        const selectedView = document.querySelector(`.stats-view[data-view="${viewType}"]`);
        if (selectedView) {
            selectedView.classList.add('active');
        }

        console.log(`Switched to ${viewType} view`);
    }

    // Export analytics data
    exportAnalyticsData() {
        // Simulate export
        const exportBtn = document.querySelector('.export-button');
        if (!exportBtn) {
            console.error('Export button not found');
            return;
        }
        
        const originalText = exportBtn.innerHTML;
        
        exportBtn.innerHTML = '⏳ Экспортирую...';
        exportBtn.style.opacity = '0.7';
        exportBtn.disabled = true;
        
        setTimeout(() => {
            exportBtn.innerHTML = '✅ Готово!';
            exportBtn.style.background = '#10b981';
            exportBtn.style.borderColor = '#10b981';
            
            setTimeout(() => {
                exportBtn.innerHTML = originalText;
                exportBtn.style.background = '';
                exportBtn.style.borderColor = '';
                exportBtn.style.opacity = '1';
                exportBtn.disabled = false;
            }, 2000);
        }, 1500);
    }

    // Handle stat card click
    handleStatCardClick(card) {
        const platformName = card.querySelector('.platform-name').textContent;
        const percentage = card.querySelector('.stat-percentage').textContent;
        
        // Add click animation
        card.style.transform = 'translateY(-2px) scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateY(-2px) scale(1)';
        }, 150);

        // Show detailed info
        this.showStatDetails(platformName, percentage);
    }

    // Show stat details
    showStatDetails(name, percentage) {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            ">
                <div style="
                    background: #1a1a1a;
                    padding: 2rem;
                    border-radius: 16px;
                    border: 1px solid #333333;
                    text-align: center;
                    max-width: 400px;
                    width: 90%;
                    transform: scale(0.8);
                    transition: transform 0.3s ease;
                ">
                    <h3 style="color: #ffffff; margin-bottom: 1rem;">${name}</h3>
                    <div style="color: #6666cc; font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">${percentage}</div>
                    <p style="color: #cccccc; margin-bottom: 1.5rem;">Подробная аналитика для этой платформы</p>
                    <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                        background: #6666cc;
                        color: white;
                        border: none;
                        padding: 0.8rem 2rem;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 500;
                        transition: all 0.3s ease;
                    ">Закрыть</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('div > div').style.transform = 'scale(1)';
        }, 50);
    }

    // Show tracklist
    showTracklist() {
        const tracklist = [
            'Звездный Путь - 03:24',
            'Космос - 02:45',
            'Галактика - 04:12'
        ];
        
        alert('Треклист:\n' + tracklist.join('\n'));
    }

    // Download report
    downloadReport() {
        // Simulate download
        const notification = document.createElement('div');
        notification.textContent = 'Отчет загружается...';
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #6666cc;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 10000;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.textContent = 'Отчет загружен успешно!';
            notification.style.background = '#28a745';
        }, 1000);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Request withdrawal
    requestWithdrawal() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            ">
                <div style="
                    background: #1a1a1a;
                    padding: 2rem;
                    border-radius: 12px;
                    border: 1px solid #333333;
                    text-align: center;
                    max-width: 400px;
                    width: 90%;
                ">
                    <h3 style="color: #ffffff; margin-bottom: 1rem;">Запрос на вывод средств</h3>
                    <p style="color: #cccccc; margin-bottom: 1.5rem;">Текущий баланс: 0 ₽</p>
                    <p style="color: #999999; margin-bottom: 2rem;">Недостаточно средств для вывода</p>
                    <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                        background: #6666cc;
                        color: white;
                        border: none;
                        padding: 0.8rem 2rem;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 500;
                    ">Закрыть</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // Animations on Scroll
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe dashboard cards with staggered animation
        const dashboardCards = document.querySelectorAll('.dashboard-card');
        dashboardCards.forEach((card, index) => {
            // Add staggered delay
            card.style.setProperty('--card-delay', `${index * 0.1}s`);
            observer.observe(card);
        });

        // Observe platform items
        const platformItems = document.querySelectorAll('.platform-item');
        platformItems.forEach(item => {
            observer.observe(item);
        });

        // Animate dashboard elements on load
        this.animateDashboardElements();
    }

    // Animate dashboard elements
    animateDashboardElements() {
        // Animate balance stats
        const balanceStats = document.querySelectorAll('.balance-stat-value');
        balanceStats.forEach((stat, index) => {
            const finalValue = stat.textContent;
            stat.textContent = '0';
            
            setTimeout(() => {
                if (finalValue.includes('K')) {
                    const numValue = parseFloat(finalValue.replace('K', '')) * 1000;
                    this.animateValue(stat, 0, numValue, 1000, 'K');
                } else if (finalValue.includes('%')) {
                    const numValue = parseFloat(finalValue.replace('%', ''));
                    this.animateValue(stat, 0, numValue, 1000, '%');
                } else {
                    const numValue = parseInt(finalValue);
                    this.animateValue(stat, 0, numValue, 1000);
                }
            }, index * 200 + 1000);
        });

        // Animate activity items
        const activityItems = document.querySelectorAll('.activity-item');
        activityItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 150 + 1500);
        });
    }

    // Enhanced animate value function
    animateValue(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            
            if (suffix === 'K' && current >= 1000) {
                element.textContent = (current / 1000).toFixed(1) + 'K';
            } else if (suffix === '%') {
                element.textContent = current + '%';
            } else if (suffix === '₽') {
                element.textContent = current + ' ₽';
            } else {
                element.textContent = current + suffix;
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Phone Mockup Animations
    setupPhoneAnimations() {
        const phoneScreen = document.querySelector('.phone-screen');
        const statNumbers = document.querySelectorAll('.stat-number');
        const featureItems = document.querySelectorAll('.feature-item');
        
        if (!phoneScreen) return;

        // Animate statistics when phone comes into view
        const phoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animatePhoneStats();
                    this.animateFeatureItems();
                    phoneObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        phoneObserver.observe(phoneScreen);

        // Add interactive hover effects
        const phoneMockup = document.querySelector('.phone-mockup');
        if (phoneMockup) {
            phoneMockup.addEventListener('mouseenter', () => {
                phoneMockup.style.transform = 'perspective(1000px) rotateY(-8deg) rotateX(8deg) translateY(-5px)';
            });
            
            phoneMockup.addEventListener('mouseleave', () => {
                phoneMockup.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(0px)';
            });
        }

        // Animate time in status bar
        this.animateStatusBarTime();
    }

    // Animate phone statistics
    animatePhoneStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach((stat, index) => {
            const originalText = stat.textContent;
            stat.style.opacity = '0';
            
            setTimeout(() => {
                stat.style.opacity = '1';
                stat.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    stat.style.transform = 'scale(1)';
                }, 300);
            }, index * 200);
        });
    }

    // Animate feature items
    animateFeatureItems() {
        const featureItems = document.querySelectorAll('.feature-item');
        
        featureItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, (index + 1) * 300);
        });
    }

    // Animate status bar time
    animateStatusBarTime() {
        const statusTime = document.querySelector('.phone-status-left span');
        if (!statusTime) return;
        
        let time = { hours: 9, minutes: 41 };
        
        setInterval(() => {
            time.minutes++;
            if (time.minutes >= 60) {
                time.minutes = 0;
                time.hours++;
                if (time.hours >= 24) {
                    time.hours = 0;
                }
            }
            
            const formattedTime = `${time.hours}:${time.minutes.toString().padStart(2, '0')}`;
            statusTime.textContent = formattedTime;
        }, 60000); // Update every minute
    }

    // Service Icons Interactions
    setupServiceIcons() {
        const serviceIcons = document.querySelectorAll('.service-icon');
        
        serviceIcons.forEach((icon, index) => {
            // Add tabindex for accessibility
            icon.setAttribute('tabindex', '0');
            icon.setAttribute('role', 'button');
            icon.setAttribute('aria-label', `Service ${index + 1}`);

            // Add click effect
            icon.addEventListener('click', () => {
                this.animateIconClick(icon, index);
            });

            // Add keyboard support
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.animateIconClick(icon, index);
                }
            });

            // Add mouse move tracking for 3D effect (debounced)
            const serviceCard = icon.closest('.service-card');
            const debouncedMouseMove = this.debounce((e) => {
                this.handleIconMouseMove(e, icon);
            }, 16); // ~60fps

            serviceCard.addEventListener('mousemove', debouncedMouseMove);

            serviceCard.addEventListener('mouseleave', () => {
                this.resetIconTransform(icon);
            });

            // Add random particle burst on hover (throttled)
            let particleBurstActive = false;
            serviceCard.addEventListener('mouseenter', () => {
                if (!particleBurstActive) {
                    particleBurstActive = true;
                    this.createParticleBurst(icon);
                    
                    setTimeout(() => {
                        particleBurstActive = false;
                    }, 1000);
                }
            });
        });

        // Animate icons on scroll
        this.animateIconsOnScroll();
    }

    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Animate icon click
    animateIconClick(icon, index) {
        // Ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            margin-left: -50px;
            margin-top: -50px;
            z-index: 10;
        `;

        icon.appendChild(ripple);

        // Bounce animation
        icon.style.transform = 'scale(0.9)';
        setTimeout(() => {
            icon.style.transform = 'scale(1.1)';
        }, 100);
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);

        // Remove ripple
        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Show service notification
        this.showServiceNotification(index);
    }

    // Handle mouse move for 3D effect
    handleIconMouseMove(e, icon) {
        const card = icon.closest('.service-card');
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / rect.height) * 30;
        const rotateY = (mouseX / rect.width) * -30;
        
        icon.style.transform = `translateY(-8px) scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // Reset icon transform
    resetIconTransform(icon) {
        icon.style.transform = '';
    }

    // Create particle burst
    createParticleBurst(icon) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                pointer-events: none;
                z-index: 5;
                animation: burstParticle 1s ease-out forwards;
            `;
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 30 + Math.random() * 20;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);
            
            icon.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // Animate icons on scroll
    animateIconsOnScroll() {
        const serviceSection = document.querySelector('.services-section');
        if (!serviceSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerIconsAnimation();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(serviceSection);
    }

    // Trigger icons animation
    triggerIconsAnimation() {
        const serviceIcons = document.querySelectorAll('.service-icon');
        
        serviceIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.animation = 'iconReveal 0.8s ease-out forwards';
                icon.style.animationDelay = `${index * 0.1}s`;
            }, index * 100);
        });
    }

    // Show service notification
    showServiceNotification(index) {
        const services = [
            'Дистрибуция музыки',
            'Аналитика',
            'Финансы',
            'Питчинг',
            'Автоматическое продвижение',
            'Поддержка артистов'
        ];

        const notification = document.createElement('div');
        notification.textContent = `${services[index]} - скоро доступно!`;
        notification.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: linear-gradient(135deg, #6666cc, #8a8aff);
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(102, 102, 204, 0.3);
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Setup Analytics Module
    setupAnalyticsModule() {
        // Initialize counter animations on load
        this.initializeCounterAnimations();
        
        // Setup chart loading state
        this.setupChartLoading();
        
        // Initialize stat bars animation
        this.initializeStatBars();
        
        // Setup analytics refresh
        this.setupAnalyticsRefresh();
        
        // Initialize analytics chart
        this.initializeAnalyticsChart();
        
        // Test chart update after initialization
        setTimeout(() => {
            console.log('Testing chart update functionality...');
            this.testChartUpdate();
        }, 2000);
    }
    
    // Test chart update functionality
    testChartUpdate() {
        if (!this.analyticsChart) {
            console.error('Chart not initialized for testing');
            return;
        }
        
        console.log('Chart is ready for updates');
        
        // Add event listener for manual testing
        document.addEventListener('keydown', (e) => {
            if (e.key === 'T' || e.key === 't') {
                console.log('Manual chart update test triggered');
                this.updateChartData(30);
            }
        });
    }

    // Initialize counter animations
    initializeCounterAnimations() {
        const counterElements = document.querySelectorAll('.summary-value.animate-counter');
        
        counterElements.forEach((element, index) => {
            const text = element.textContent;
            const hasRuble = text.includes('₽');
            const numValue = parseInt(text.replace(/[^\d]/g, ''));
            
            element.textContent = hasRuble ? '0 ₽' : '0';
            
            setTimeout(() => {
                this.animateValue(element, 0, numValue, 1500, hasRuble ? ' ₽' : '');
            }, index * 200 + 1000);
        });
    }

    // Setup chart loading
    setupChartLoading() {
        const chartLoading = document.querySelector('.chart-loading');
        const chartCanvas = document.querySelector('#analyticsChart');
        
        if (chartLoading && chartCanvas) {
            // Show loading initially
            chartLoading.style.display = 'flex';
            chartCanvas.style.opacity = '0.3';
            
            // Hide loading after chart is created
            setTimeout(() => {
                chartLoading.style.display = 'none';
                chartCanvas.style.opacity = '1';
            }, 1000);
        }
    }

    // Initialize stat bars
    initializeStatBars() {
        const statFills = document.querySelectorAll('.stat-fill');
        
        statFills.forEach((fill, index) => {
            const width = fill.style.width;
            fill.style.width = '0%';
            
            setTimeout(() => {
                fill.style.width = width;
            }, index * 100 + 1500);
        });
    }

    // Setup analytics refresh
    setupAnalyticsRefresh() {
        // Auto-refresh every 30 seconds (demo)
        setInterval(() => {
            this.refreshAnalyticsData();
        }, 30000);
    }

    // Refresh analytics data
    refreshAnalyticsData() {
        const statFills = document.querySelectorAll('.stat-fill');
        
        statFills.forEach(fill => {
            const currentWidth = parseFloat(fill.style.width);
            const randomChange = (Math.random() - 0.5) * 2; // -1 to 1
            const newWidth = Math.max(0.1, Math.min(100, currentWidth + randomChange));
            
            fill.style.width = newWidth + '%';
            
            // Update percentage display
            const card = fill.closest('.stat-card');
            const percentage = card.querySelector('.stat-percentage');
            if (percentage) {
                percentage.textContent = newWidth.toFixed(1) + '%';
            }
                 });
     }

         // Initialize Analytics Chart
    initializeAnalyticsChart() {
        console.log('Initializing analytics chart...');
        
        // Wait for Chart.js to load
        if (typeof Chart === 'undefined') {
            console.log('Chart.js not loaded yet, waiting...');
            setTimeout(() => this.initializeAnalyticsChart(), 100);
            return;
        }

        const chartCanvas = document.getElementById('analyticsChart');
        if (!chartCanvas) {
            console.error('Chart canvas not found');
            return;
        }

        console.log('Chart canvas found, initializing...');
        const ctx = chartCanvas.getContext('2d');
        
        // Chart data for different periods
        this.chartData = {
            7: {
                labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                plays: [1200, 1900, 3000, 2500, 2200, 3000, 2800],
                revenue: [48, 76, 120, 100, 88, 120, 112]
            },
            30: {
                labels: ['1 нед', '2 нед', '3 нед', '4 нед'],
                plays: [15000, 18000, 22000, 25000],
                revenue: [600, 720, 880, 1000]
            },
            90: {
                labels: ['Месяц 1', 'Месяц 2', 'Месяц 3'],
                plays: [65000, 78000, 89000],
                revenue: [2600, 3120, 3560]
            }
        };

        // Destroy existing chart if it exists
        if (this.analyticsChart) {
            this.analyticsChart.destroy();
        }

        // Create chart
        try {
            this.analyticsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.chartData[7].labels,
                    datasets: [{
                        label: 'Прослушивания',
                        data: this.chartData[7].plays,
                        borderColor: '#6666cc',
                        backgroundColor: 'rgba(102, 102, 204, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#6666cc',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 8
                    }, {
                        label: 'Доходы (₽)',
                        data: this.chartData[7].revenue,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1000,
                        easing: 'easeOutQuart'
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: '#6666cc',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: true
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#999999',
                                font: {
                                    size: 12
                                }
                            }
                        },
                        y: {
                            display: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                drawBorder: false
                            },
                            ticks: {
                                color: '#999999',
                                font: {
                                    size: 12
                                },
                                callback: function(value) {
                                    return value >= 1000 ? (value / 1000) + 'K' : value;
                                }
                            }
                        }
                    },
                    elements: {
                        point: {
                            hoverBorderWidth: 3
                        }
                    }
                }
            });
            
            console.log('Analytics chart created successfully');
        } catch (error) {
            console.error('Error creating chart:', error);
        }
    }

         // Update chart with new period data
    updateChartData(period) {
        if (!this.analyticsChart) {
            console.error('Analytics chart not initialized');
            return;
        }

        const data = this.chartData[period];
        if (!data) {
            console.error('No data for period:', period);
            return;
        }

        console.log('Updating chart with period:', period, 'data:', data);

        // Add updating class for animation
        const analyticsModule = document.querySelector('.analytics-module');
        if (analyticsModule) {
            analyticsModule.classList.add('updating');
        }

        // Show loading state
        const chartLoading = document.querySelector('.chart-loading');
        const chartCanvas = document.querySelector('#analyticsChart');
        
        if (chartLoading && chartCanvas) {
            chartLoading.style.display = 'flex';
            chartCanvas.style.opacity = '0.3';
        }

        // Update chart data with animation
        this.analyticsChart.data.labels = data.labels;
        this.analyticsChart.data.datasets[0].data = data.plays;
        this.analyticsChart.data.datasets[1].data = data.revenue;

        // Update chart with animation
        this.analyticsChart.update('active');

        // Hide loading state after animation
        setTimeout(() => {
            if (chartLoading && chartCanvas) {
                chartLoading.style.display = 'none';
                chartCanvas.style.opacity = '1';
            }
            
            // Remove updating class
            if (analyticsModule) {
                analyticsModule.classList.remove('updating');
            }
            
            console.log('Chart updated successfully');
        }, 700);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting SoundDeliveryApp...');
    const app = new SoundDeliveryApp();
    console.log('SoundDeliveryApp instance created:', app);
});

// FAQ Toggle functionality removed - handled by main class

// Utility functions
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        z-index: 10000;
        transition: all 0.3s ease;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#6666cc'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Performance optimization
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};

// Service Worker registration removed - no SW file available 